import { supabase } from '../supabase'

export class SaveService {
  static STORAGE_KEY = 'sakura_dreams_saves'

  static async saveGame(saveParams) {
    const { user_id, slot_index = 0, save_name = `Save ${slot_index + 1}`, current_node, state } = saveParams
    const timestamp = new Date().toISOString()
    
    const saveData = {
      user_id,
      slot_index,
      save_name,
      current_node,
      state,
      updated_at: timestamp
    }

    // Try saving to Supabase if not a local user
    if (user_id && !user_id.startsWith('local-')) {
      try {
        const { error } = await supabase
          .from('game_saves')
          .upsert(saveData, { onConflict: ['user_id', 'slot_index'] })
        
        if (error) console.error('Supabase save error:', error.message)
      } catch (error) {
        console.error('Failed to save to Supabase:', error.message)
      }
    }

    // Always save to localStorage as fallback/primary for local users
    this.saveToLocal(saveData)
    return { success: true, data: saveData }
  }

  static saveToLocal(saveData) {
    const allSaves = this.getLocalSaves()
    const userSaves = allSaves[saveData.user_id] || {}
    userSaves[saveData.slot_index] = saveData
    allSaves[saveData.user_id] = userSaves
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(allSaves))
  }

  static getLocalSaves() {
    const data = localStorage.getItem(this.STORAGE_KEY)
    return data ? JSON.parse(data) : {}
  }

  static async loadGame(userId, slotIndex = 0) {
    // Try Supabase first if not local
    if (userId && !userId.startsWith('local-')) {
      try {
        const { data, error } = await supabase
          .from('game_saves')
          .select('*')
          .eq('user_id', userId)
          .eq('slot_index', slotIndex)
          .single()

        if (!error && data) {
          return { 
            success: true, 
            data: this.formatSaveData(data)
          }
        }
      } catch (error) {
        console.warn('Failed to load from Supabase, checking local:', error.message)
      }
    }

    // Fallback to local
    const allSaves = this.getLocalSaves()
    const userSaves = allSaves[userId] || {}
    const localSave = userSaves[slotIndex]

    if (localSave) {
      return { success: true, data: this.formatSaveData(localSave) }
    }

    return { success: true, data: null }
  }

  static async getAllSaves(userId) {
    let remoteSaves = []
    if (userId && !userId.startsWith('local-')) {
      try {
        const { data, error } = await supabase
          .from('game_saves')
          .select('*')
          .eq('user_id', userId)
          .order('slot_index', { ascending: true })
        
        if (!error && data) remoteSaves = data
      } catch (error) {
        console.warn('Could not fetch remote saves:', error.message)
      }
    }

    const allLocalSaves = this.getLocalSaves()
    const userLocalSaves = Object.values(allLocalSaves[userId] || {})

    // Merge saves, preferring remote if available but keeping both if different? 
    // Usually we just want the latest or the one that exists.
    // For simplicity, let's just return a combined list or prefer local if offline.
    const combinedSaves = [...userLocalSaves]
    remoteSaves.forEach(rs => {
      const existingIdx = combinedSaves.findIndex(ls => ls.slot_index === rs.slot_index)
      if (existingIdx === -1) {
        combinedSaves.push(rs)
      } else {
        // Prefer newest
        if (new Date(rs.updated_at) > new Date(combinedSaves[existingIdx].updated_at)) {
          combinedSaves[existingIdx] = rs
        }
      }
    })

    return combinedSaves.sort((a, b) => a.slot_index - b.slot_index)
  }

  static formatSaveData(data) {
    return {
      slotIndex: data.slot_index,
      saveName: data.save_name,
      currentScene: data.current_node,
      gameState: data.state,
      updatedAt: data.updated_at
    }
  }

  static async deleteSave(userId, slotIndex) {
    if (userId && !userId.startsWith('local-')) {
      await supabase
        .from('game_saves')
        .delete()
        .eq('user_id', userId)
        .eq('slot_index', slotIndex)
    }

    const allSaves = this.getLocalSaves()
    if (allSaves[userId]) {
      delete allSaves[userId][slotIndex]
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(allSaves))
    }
    return { success: true }
  }
}
