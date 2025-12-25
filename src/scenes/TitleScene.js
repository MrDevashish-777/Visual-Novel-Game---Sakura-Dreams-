import Phaser from 'phaser'
import { screenSize, audioConfig } from '../gameConfig.json'

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'TitleScene' })
    this.isStarting = false
  }

  init() {
    this.isStarting = false
  }

  preload() {
    // Setup loading progress UI
    this.setupLoadingProgressUI(this)
    
    // Load asset pack by type
    this.load.pack('assetPack', 'assets/asset-pack.json')
  }

  setupLoadingProgressUI(scene) {
    const screenWidth = screenSize.width.value
    const screenHeight = screenSize.height.value
    
    // Create loading progress bar
    const progressBarWidth = Math.min(screenWidth * 0.7, 500)
    const progressBarHeight = 12
    const progressBarX = (screenWidth - progressBarWidth) / 2
    const progressBarY = screenHeight * 0.55

    // Progress bar background
    this.progressBar = scene.add.graphics()
    this.progressBar.fillStyle(0x2F1B69, 0.8)
    this.progressBar.fillRoundedRect(progressBarX, progressBarY, progressBarWidth, progressBarHeight, 6)
    this.progressBar.setDepth(102)
    
    // Progress bar fill
    this.progressFill = scene.add.graphics()
    this.progressFill.setDepth(103)
    
    // Progress percentage text
    this.progressText = scene.add.text(screenWidth / 2, progressBarY + progressBarHeight + 25, '0%', {
      fontFamily: 'Arial, sans-serif',
      fontSize: '24px',
      fill: '#FFB6C1',
      stroke: '#FF1493',
      strokeThickness: 2,
      align: 'center',
      fontStyle: 'bold'
    }).setOrigin(0.5, 0.5)
    this.progressText.setDepth(105)
    
    // Store progress bar parameters
    this.progressBarParams = {
      x: progressBarX,
      y: progressBarY,
      width: progressBarWidth,
      height: progressBarHeight
    }

    // Setup loading progress listener
    scene.load.on('progress', (progress) => {
      this.currentProgress = progress * 100
      this.updateProgressBar()
    })

    // Hide progress bar when loading is complete
    scene.load.on('complete', () => {
      this.hideProgressBar()
    })
  }

  updateProgressBar() {
    const params = this.progressBarParams
    const fillWidth = (params.width * this.currentProgress) / 100
    
    // Clear previous fill
    this.progressFill.clear()
    
    // Draw new progress fill
    if (fillWidth > 0) {
      // Academy theme gradient effect - from pink to blue
      let color
      if (this.currentProgress < 50) {
        // Pink to purple
        color = Phaser.Display.Color.Interpolate.ColorWithColor(
          { r: 255, g: 182, b: 193 }, // Pink
          { r: 147, g: 112, b: 219 }, // Purple
          1,
          this.currentProgress / 50
        )
      } else {
        // Purple to blue
        color = Phaser.Display.Color.Interpolate.ColorWithColor(
          { r: 147, g: 112, b: 219 }, // Purple
          { r: 74, g: 144, b: 226 },  // Blue
          1,
          (this.currentProgress - 50) / 50
        )
      }
      
      this.progressFill.fillStyle(Phaser.Display.Color.GetColor32(color.r, color.g, color.b, 255))
      this.progressFill.fillRoundedRect(params.x, params.y, fillWidth, params.height, 3)
    }
    
    // Update percentage text
    this.progressText.setText(Math.floor(this.currentProgress) + '%')
  }

  hideProgressBar() {
    // Hide progress bar elements after loading is complete
    if (this.progressBar) {
      this.progressBar.setVisible(false)
    }
    if (this.progressFill) {
      this.progressFill.setVisible(false)
    }
    if (this.progressText) {
      this.progressText.setVisible(false)
    }
  }

  create() {
    // Create background
    this.createBackground()
    
    // Create UI
    this.createUI()
    
    // Setup input
    this.setupInputs()
    
    // Play background music
    this.playBackgroundMusic()
  }

  createBackground() {
    const screenWidth = screenSize.width.value
    const screenHeight = screenSize.height.value
    
    // Create background image
    this.background = this.add.image(screenWidth / 2, screenHeight / 2, 'classroom_background')
    
    // Calculate scale ratio to cover entire screen with background
    const scaleX = screenWidth / this.background.width
    const scaleY = screenHeight / this.background.height
    const scale = Math.max(scaleX, scaleY)
    
    this.background.setScale(scale)
    
    // Add semi-transparent overlay
    const overlay = this.add.graphics()
    overlay.fillStyle(0x000000, 0.3)
    overlay.fillRect(0, 0, screenWidth, screenHeight)
  }

  createUI() {
    this.createGameTitle()
    this.createStartButton()
  }

  createGameTitle() {
    const screenWidth = screenSize.width.value
    const screenHeight = screenSize.height.value
    
    // Create game title - adjusted to a lower position
    this.gameTitle = this.add.image(screenWidth / 2, screenHeight * 0.5, 'game_title')
    
    // Calculate title scale
    const maxTitleWidth = screenWidth * 0.8
    const titleScale = Math.min(maxTitleWidth / this.gameTitle.width, 1)
    this.gameTitle.setScale(titleScale)
    
    // Add title animation
    this.tweens.add({
      targets: this.gameTitle,
      y: this.gameTitle.y - 10,
      duration: 2000,
      ease: 'Sine.easeInOut',
      yoyo: true,
      repeat: -1
    })
  }

  createStartButton() {
    const screenWidth = screenSize.width.value
    const screenHeight = screenSize.height.value
    
    // Create start text - adjusted closer to the bottom
    this.startText = this.add.text(screenWidth / 2, screenHeight * 0.8, 'Press ENTER to Start', {
      fontFamily: 'Arial, sans-serif',
      fontSize: Math.min(screenWidth / 25, 32) + 'px',
      fill: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4,
      align: 'center'
    }).setOrigin(0.5, 0.5)

    // Add blinking animation
    this.tweens.add({
      targets: this.startText,
      alpha: 0.3,
      duration: 1000,
      ease: 'Sine.easeInOut',
      yoyo: true,
      repeat: -1
    })
    
    // Create subtitle - adjusted closer to the bottom
    this.subtitleText = this.add.text(screenWidth / 2, screenHeight * 0.9, 'Visual Novel Adventure Game', {
      fontFamily: 'Arial, sans-serif',
      fontSize: Math.min(screenWidth / 40, 20) + 'px',
      fill: '#cccccc',
      align: 'center'
    }).setOrigin(0.5, 0.5)
  }

  setupInputs() {
    // Keyboard input
    this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    
    // Mouse click
    this.input.on('pointerdown', () => {
      this.startGame()
    })
  }

  playBackgroundMusic() {
    if (this.backgroundMusic) {
      this.backgroundMusic.stop()
    }
    
    this.backgroundMusic = this.sound.add('peaceful_school_theme', {
      volume: audioConfig.musicVolume.value,
      loop: true
    })
    this.backgroundMusic.play()
  }

  startGame() {
    if (this.isStarting) return
    
    this.isStarting = true
    
    // Play click sound effect
    this.sound.play('ui_click', { volume: audioConfig.sfxVolume.value })
    
    // Stop background music
    if (this.backgroundMusic) {
      this.backgroundMusic.stop()
    }
    
    // Hide title UI elements
    this.gameTitle.setVisible(false)
    this.startText.setVisible(false)
    this.subtitleText.setVisible(false)
    
    // Start actual loading (now simplified)
    this.startActualLoading()
  }

  showGameLoadingInterface() {
    // This method is no longer needed as loading is simplified
    this.startActualLoading()
  }

  createGameLoadingUI() {
    // This method is no longer needed as loading is simplified
  }

  // All complex loading UI methods are no longer needed

  startActualLoading() {
    // All resources are now loaded via asset-pack.json in preload()
    // Just transition to game scene directly
    this.time.delayedCall(500, () => {
      this.transitionToGameSceneDirectly()
    })
  }

  updateProgressBar() {
    const params = this.progressBarParams
    const fillWidth = (params.width * this.currentProgress) / 100
    
    // Clear previous fill
    this.progressFill.clear()
    
    // Draw new progress fill
    if (fillWidth > 0) {
      // Academy theme gradient effect - from pink to blue
      let color
      if (this.currentProgress < 50) {
        // Pink to purple
        color = Phaser.Display.Color.Interpolate.ColorWithColor(
          { r: 255, g: 182, b: 193 }, // Pink
          { r: 147, g: 112, b: 219 }, // Purple
          1,
          this.currentProgress / 50
        )
      } else {
        // Purple to blue
        color = Phaser.Display.Color.Interpolate.ColorWithColor(
          { r: 147, g: 112, b: 219 }, // Purple
          { r: 74, g: 144, b: 226 },  // Blue
          1,
          (this.currentProgress - 50) / 50
        )
      }
      
      this.progressFill.fillStyle(Phaser.Display.Color.GetColor32(color.r, color.g, color.b, 255))
      this.progressFill.fillRoundedRect(params.x, params.y, fillWidth, params.height, 3)
    }
    
    // Update percentage text
    this.progressText.setText(Math.floor(this.currentProgress) + '%')
  }

  // completeActualLoading method is no longer needed

  transitionToGameSceneDirectly() {
    // Clean up progress bar elements
    if (this.progressBar) this.progressBar.destroy()
    if (this.progressFill) this.progressFill.destroy()
    if (this.progressText) this.progressText.destroy()
    
    // Start VisualNovelScene
    this.scene.start('VisualNovelScene')
  }

  update() {
    // Detect keyboard input
    if (Phaser.Input.Keyboard.JustDown(this.enterKey) || 
        Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
      this.startGame()
    }
  }
}