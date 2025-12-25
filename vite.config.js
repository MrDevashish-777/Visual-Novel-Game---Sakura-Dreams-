import { defineConfig } from 'vite'

// Relative base ensures assets work correctly when served from different roots
// (helps Netlify previews and subfolder deployments). If you prefer absolute
// root paths, change this to '/'.
export default defineConfig({
  base: './'
})
