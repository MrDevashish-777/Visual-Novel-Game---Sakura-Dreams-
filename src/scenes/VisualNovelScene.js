import Phaser from 'phaser'
import { screenSize, visualNovelConfig, audioConfig } from '../gameConfig.json'
import { storyData, characters, backgrounds } from '../storyData.js'

export default class VisualNovelScene extends Phaser.Scene {
  constructor() {
    super({ key: 'VisualNovelScene' })
  }

  init() {
    // Initialize game state
    this.currentScene = 'start'
    this.currentDialogueIndex = 0
    this.isTyping = false
    this.isShowingChoices = false
    this.currentText = ''
    this.targetText = ''
    this.typewriterTimer = null
    this.currentCharacterSprite = null
    this.currentBackground = null
    this.currentMusic = null
    
    // UI elements
    this.textBox = null
    this.nameBox = null
    this.dialogueText = null
    this.nameText = null
    this.choiceButtons = []
    this.choicesContainer = null
    this.continuePrompt = null
  }

  preload() {
    // All resources are now loaded via asset-pack.json in TitleScene
    // No additional loading needed here
  }

  create() {
    // Create UI interface
    this.createUI()
    
    // Create dialog box
    this.createDialogBox()
    
    // Setup input controls
    this.setupInputs()
    
    // Start the first scene
    this.startScene(this.currentScene)
    
    // Remove fade-in effect to avoid jumping with TitleScene transition
  }

  createUI() {
    const screenWidth = screenSize.width.value
    const screenHeight = screenSize.height.value
    
    // Only create choice buttons container, dialog box already created in createDialogBox
    this.choicesContainer = this.add.container(0, 0)
    this.choicesContainer.setDepth(20)
  }

  createDialogBox() {
    const screenWidth = screenSize.width.value
    const screenHeight = screenSize.height.value
    
    // Dialogue box background - move closer to bottom
    this.textBox = this.add.nineslice(
      screenWidth / 2, 
      screenHeight - 100, 
      'text_box', 
      null, 
      screenWidth - 100, 
      120, 
      20, 20, 20, 20
    ).setOrigin(0.5, 0.5)
    this.textBox.setAlpha(0.9)
    this.textBox.setDepth(10) // Ensure dialog box is in front

    // Create character name box - adjust position accordingly
    this.nameBox = this.add.nineslice(
      150, 
      screenHeight - 160, 
      'choice_button', 
      null, 
      200, 
      40, 
      15, 15, 15, 15
    ).setOrigin(0.5, 0.5)
    this.nameBox.setAlpha(0.9)
    this.nameBox.setDepth(10)
    this.nameBox.setVisible(false)
    
    // Character name text - position adjusted accordingly
    this.nameText = this.add.text(
      150, 
      screenHeight - 160, 
      '', 
      {
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        fill: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5, 0.5)
    this.nameText.setDepth(11)
    
    // Dialog text - position adjusted accordingly
    this.dialogueText = this.add.text(
      70, 
      screenHeight - 140, 
      '', 
      {
        fontFamily: 'Arial, sans-serif',
        fontSize: '20px',
        fill: '#ffffff',
        align: 'left',
        wordWrap: { width: screenWidth - 140 }
      }
    ).setOrigin(0, 0) // Top left alignment
    this.dialogueText.setDepth(11)
    
    // Create continue prompt - position adjusted accordingly
    this.continuePrompt = this.add.text(screenWidth - 50, screenHeight - 50, '▼', {
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      fill: '#ffffff'
    }).setOrigin(0.5, 0.5)
    this.continuePrompt.setDepth(11)
    this.continuePrompt.setVisible(false)

    // Add continue prompt blinking animation
    this.tweens.add({
      targets: this.continuePrompt,
      alpha: 0.3,
      duration: 800,
      ease: 'Sine.easeInOut',
      yoyo: true,
      repeat: -1
    })
  }

  setupInputs() {
    // Keyboard input
    this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    
    // Mouse click
    this.input.on('pointerdown', () => {
      this.handleAdvance()
    })
  }

  startScene(sceneKey) {
    const scene = storyData[sceneKey]
    if (!scene) return

    this.currentScene = sceneKey
    this.currentDialogueIndex = 0
    this.isShowingChoices = false

    // Setup background
    this.setBackground(scene.background)
    
    // Play background music
    this.playMusic(scene.music)
    
    // Start the first dialogue
    this.showDialogue()
  }

  setBackground(backgroundKey) {
    const screenWidth = screenSize.width.value
    const screenHeight = screenSize.height.value
    
    if (this.currentBackground) {
      this.currentBackground.destroy()
    }

    const backgroundAsset = backgrounds[backgroundKey]
    if (backgroundAsset) {
      this.currentBackground = this.add.image(screenWidth / 2, screenHeight / 2, backgroundAsset)
      
      // Calculate scale to cover entire screen
      const scaleX = screenWidth / this.currentBackground.width
      const scaleY = screenHeight / this.currentBackground.height
      const scale = Math.max(scaleX, scaleY)
      
      this.currentBackground.setScale(scale)
      this.currentBackground.setDepth(-2)
    }
  }

  playMusic(musicKey) {
    if (!musicKey) return
    
    if (this.currentMusic && this.currentMusic.key !== musicKey) {
      this.currentMusic.stop()
    }

    if (!this.currentMusic || this.currentMusic.key !== musicKey) {
      this.currentMusic = this.sound.add(musicKey, {
        volume: audioConfig.musicVolume.value,
        loop: true
      })
      this.currentMusic.play()
    }
  }

  showDialogue() {
    const scene = storyData[this.currentScene]
    if (!scene || !scene.dialogue) return

    const dialogue = scene.dialogue[this.currentDialogueIndex]
    if (!dialogue) {
      // Dialog finished, show choices
      if (scene.choices && scene.choices.length > 0) {
        this.showChoices(scene.choices)
      }
      return
    }

    // Hide choice buttons
    this.choicesContainer.setVisible(false)
    
    // Setup character
    this.setCharacter(dialogue.character, dialogue.sprite)
    
    // Setup character name
    this.setCharacterName(dialogue.character)
    
    // Start typewriter effect
    this.startTypewriter(dialogue.text)
  }

  setCharacter(characterKey, spriteKey) {
    const screenWidth = screenSize.width.value
    const screenHeight = screenSize.height.value
    
    // Remove current character sprite
    if (this.currentCharacterSprite) {
      this.currentCharacterSprite.destroy()
      this.currentCharacterSprite = null
    }

    if (spriteKey && characters[characterKey]) {
      this.currentCharacterSprite = this.add.image(
        screenWidth / 2, 
        screenHeight / 2, 
        spriteKey
      )
      
      // Setup character scale
      const characterScale = visualNovelConfig.characterScaleInDialog.value
      this.currentCharacterSprite.setScale(characterScale)
      
      // Set character position (bottom aligned, adjusted closer to bottom)
      this.currentCharacterSprite.setOrigin(0.5, 1)
      this.currentCharacterSprite.setY(screenHeight - 120) // Changed from 180 to 120 to display character closer to bottom
      
      // Set depth - display character behind dialog box
      this.currentCharacterSprite.setDepth(-1)
      
      // Fade-in animation
      this.currentCharacterSprite.setAlpha(0)
      this.tweens.add({
        targets: this.currentCharacterSprite,
        alpha: 1,
        duration: 300,
        ease: 'Power2'
      })
    }
  }

  setCharacterName(characterKey) {
    const character = characters[characterKey]
    if (character && character.name) {
      this.nameBox.setVisible(true)
      this.nameText.setText(character.name)
      this.nameText.setColor(character.color)
      this.nameText.setVisible(true)
    } else {
      this.nameBox.setVisible(false)
      this.nameText.setText('')
      this.nameText.setVisible(false)
    }
  }

  startTypewriter(text) {
    this.isTyping = true
    this.currentText = ''
    this.targetText = text
    this.continuePrompt.setVisible(false)
    
    // Clear previous timer
    if (this.typewriterTimer) {
      this.typewriterTimer.destroy()
    }
    
    // Start typewriter effect
    this.typewriterTimer = this.time.addEvent({
      delay: visualNovelConfig.textSpeed.value,
      callback: this.typeNextCharacter,
      callbackScope: this,
      repeat: this.targetText.length - 1
    })
    
    // Play typing sound effect
    if (this.targetText.length > 0) {
      this.sound.play('text_typing', { volume: audioConfig.sfxVolume.value })
    }
  }

  typeNextCharacter() {
    if (this.currentText.length < this.targetText.length) {
      this.currentText += this.targetText.charAt(this.currentText.length)
      this.dialogueText.setText(this.currentText)
    } else {
      // Typing complete
      this.isTyping = false
      this.continuePrompt.setVisible(true)
      
      if (this.typewriterTimer) {
        this.typewriterTimer.destroy()
        this.typewriterTimer = null
      }
    }
  }

  showChoices(choices) {
    if (!choices || choices.length === 0) return
    
    const screenWidth = screenSize.width.value
    const screenHeight = screenSize.height.value
    
    // Clear previous choice buttons
    this.choicesContainer.removeAll(true)
    
    choices.forEach((choice, index) => {
      const yPosition = screenHeight - 300 - (index * 70)
      
      // Create choice button background
      const choiceButton = this.add.nineslice(
        screenWidth / 2,
        yPosition,
        'choice_button',
        null,
        Math.min(screenWidth - 100, 600),
        50,
        15, 15, 15, 15
      ).setOrigin(0.5, 0.5)
      choiceButton.setInteractive()
      
      // Create choice text
      const choiceText = this.add.text(screenWidth / 2, yPosition, choice.text, {
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        fill: '#000000',
        align: 'center',
        wordWrap: { width: Math.min(screenWidth - 150, 550) }
      }).setOrigin(0.5, 0.5)
      
      // Add to container
      this.choicesContainer.add([choiceButton, choiceText])
      
      // Button interaction
      choiceButton.on('pointerover', () => {
        choiceButton.setTint(0xcccccc)
      })
      
      choiceButton.on('pointerout', () => {
        choiceButton.clearTint()
      })
      
      choiceButton.on('pointerdown', () => {
        this.sound.play('ui_click', { volume: audioConfig.sfxVolume.value })
        this.choicesContainer.setVisible(false)
        this.loadScene(choice.next)
      })
    })
    
    this.choicesContainer.setVisible(true)
  }

  hideChoices() {
    this.choicesContainer.setVisible(false)
  }

  loadScene(nextScene) {
    // Hide choices
    this.hideChoices()
    
    // Play page turn sound effect
    this.sound.play('page_turn', { volume: audioConfig.sfxVolume.value })
    
    // Fade-out effect
    this.cameras.main.fadeOut(300, 0, 0, 0)
    
    this.cameras.main.once('camerafadeoutcomplete', () => {
      this.startScene(nextScene)
      this.cameras.main.fadeIn(300, 0, 0, 0)
    })
  }

  handleAdvance() {
    if (this.isShowingChoices) return
    
    if (this.isTyping) {
      // If typing, complete immediately
      this.completeTypewriter()
    } else {
      // Otherwise go to next dialogue
      this.nextDialogue()
    }
  }

  completeTypewriter() {
    if (this.typewriterTimer) {
      this.typewriterTimer.destroy()
      this.typewriterTimer = null
    }
    
    this.currentText = this.targetText
    this.dialogueText.setText(this.currentText)
    this.isTyping = false
    this.continuePrompt.setVisible(true)
  }

  nextDialogue() {
    this.currentDialogueIndex++
    this.showDialogue()
  }

  update() {
    // Detect keyboard input
    if (Phaser.Input.Keyboard.JustDown(this.enterKey) || 
        Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
      this.handleAdvance()
    }
  }
}