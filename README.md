# Sakura Dream - Visual Novel Game

A beautiful anime-style visual novel game made with Phaser 3, featuring branching storylines and beautiful anime girl characters.

## Game Features

### 🌸 Beautiful Anime Characters
- **Yuki** - A gentle and kind silver-haired blue-eyed girl
- **Mi** - A cheerful and outgoing brown-haired green-eyed girl
- **Rin** - A mysterious and elegant black-haired purple-eyed girl

### 📖 Interactive Story
- Multiple meaningful choice-based branching storylines
- Different endings based on your decisions
- Rich character development and dialogue
- Beautiful backgrounds and environments

### 🎮 Game Features
- **Typewriter Effect**: Text appears character by character for immersive reading experience
- **Multiple Endings**: 9 different endings based on your choices
- **Beautiful Art**: High-quality anime-style character illustrations and backgrounds
- **Atmospheric Music**: Original background music that changes with scenes
- **Sound Effects**: Immersive audio for UI interactions and scene transitions

## Story Background

You are a new transfer student at Sakura High School. On your first day, you meet three beautiful girls, each with their own unique personality and story. Your choices will determine which path you take and what kind of relationships you develop.

### Character Routes
- **Yuki's Route**: Experience gentle romance filled with kindness and understanding
- **Mi's Route**: Enjoy energetic adventures with a cheerful and lively girl
- **Rin's Route**: Discover the mysterious depth of a quiet and intellectual soul

## How to Play

### Controls
- **Enter Key** or **Space Key**: Advance text/make choices
- **Mouse Click**: Advance text or select options
- **Choice Buttons**: Click to make story decisions

### Gameplay
1. Read the story that unfolds with typewriter effect
2. Make choices when prompted to influence story direction
3. Develop relationships with different characters
4. Experience multiple endings based on your decisions
5. Replay to explore all story branches and endings

## Technical Features

- Built with **Phaser 3.87.0**
- Responsive design that adapts to different screen sizes
- JSON-configurable game settings
- Modular story system for easy content expansion
- Beautiful scalable UI elements using nine-slice sprites

## Development

### Project Structure
```
src/
├── scenes/
│   ├── TitleScene.js        # Main menu
│   └── VisualNovelScene.js  # Main game scene
├── gameConfig.json          # Game configuration
├── storyData.js            # Story content and characters
└── main.js                 # Game initialization
```

### Adding New Content
- **Characters**: Add new character data in `storyData.js`
- **Story Scenes**: Extend the `storyData` object with new scenes
- **Backgrounds**: Add new background assets and references
- **Audio**: Include new music and sound effects

## Asset Creation

All game assets (characters, backgrounds, UI elements, music, and sound effects) were specifically generated for this project using AI tools.

---

Experience the magic of interactive storytelling in **Sakura Dream**! 🌸

---

## 🚀 Deploying to Netlify (Quick Guide)

This project is configured to be deployed on Netlify as a static site.

What I added for Netlify:
- `netlify.toml` — build command and publish directory (`dist`).
- `public/_redirects` — SPA fallback to `index.html` so client-side routing works.
- `vite.config.js` — `base: './'` to make asset URLs relative and robust across previews.

Deployment options:

1) Deploy via Netlify UI (recommended):
   - Push your repo to GitHub (or other supported Git provider).
   - In Netlify, "New site from Git" → connect repo.
   - Set the build command to `npm run build` and the publish directory to `dist` (these are in `netlify.toml`).
   - Deploy.

2) Manual deploy (drag & drop):
   - Run `npm run build` locally.
   - Zip or drag the generated `dist/` folder to Netlify's "Sites → Add new site → Deploy manually".

3) CLI deploy (optional, requires `netlify-cli`):
   - `npm run build`
   - `npx netlify deploy --prod --dir=dist` (or follow `netlify deploy` prompts for draft/production deploys)

Notes & troubleshooting:
- Single Page App routing: the `public/_redirects` file contains `/* /index.html 200` to route all requests to your app entry.
- Build output is `dist/` by default (this is ignored by `.gitignore` — good). If `dist/` was accidentally committed, remove it from the index: `git rm -r --cached dist` then commit.
- If your app uses environment secrets, set them in Netlify's Site Settings → Build & deploy → Environment → Environment variables.
- If you prefer absolute paths for assets, change `base` in `vite.config.js` to `'/'`.

If you'd like, I can also:
- Add a GitHub Action that automatically deploys to Netlify on push, or
- Add a helper `deploy` script using `netlify-cli`.

---
