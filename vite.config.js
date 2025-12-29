import { defineConfig } from 'vite'

// Relative base ensures assets work correctly when served from different roots
// (helps Netlify previews and subfolder deployments). If you prefer absolute
// root paths, change this to '/'.
//
// Note: Some dev/source-map modes inject `eval`-style code which can trigger
// CSP errors when a strict Content-Security-Policy is in place. For production
// builds, keep `sourcemap` disabled to avoid introducing `eval`-based wrappers.
export default defineConfig({
  base: './',
  build: {
    // Disable production source maps by default to reduce chance of `eval` usage
    sourcemap: false
  }
})
