import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { nodePolyfills } from 'vite-plugin-node-polyfills';


// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env': {} // This provides an empty process.env object to the browser
  },
  plugins: [react(), tailwindcss(), nodePolyfills({
    // Whether to polyfill specific globals
    globals: {
      Buffer: true,
      global: true,
      process: true,
    },
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})