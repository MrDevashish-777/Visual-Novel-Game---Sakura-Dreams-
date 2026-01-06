import { supabase } from '../supabase'

export class AuthService {
  static async signInAnonymously() {
    try {
      const { data, error } = await supabase.auth.signInAnonymously()
      if (error) {
        console.warn('Supabase anonymous sign-in failed, using local session:', error.message)
        return this.getLocalSession()
      }
      return { success: true, user: data.user }
    } catch (error) {
      console.warn('Error signing in, using local session:', error.message)
      return this.getLocalSession()
    }
  }

  static getLocalSession() {
    let localId = localStorage.getItem('sakura_dreams_local_id')
    if (!localId) {
      localId = 'local-' + Math.random().toString(36).substr(2, 9)
      localStorage.setItem('sakura_dreams_local_id', localId)
    }
    return { success: true, user: { id: localId, isAnonymous: true } }
  }

  static async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  }

  static async signOut() {
    await supabase.auth.signOut()
  }
}
