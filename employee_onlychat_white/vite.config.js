// vite.config.js (esmodule)
import path from 'path'
import { defineConfig } from 'vite'
// import { PagesFaceRollupPlugin } from './src/pagesFace/plugin/esm'

export default defineConfig({
  plugins: [
    // PagesFaceRollupPlugin(path.resolve(__dirname, './src/pagesFace'))
  ]
})