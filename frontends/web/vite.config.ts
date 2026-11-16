import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@app/types': path.resolve(rootDir, '../../packages/types/src'),
      '@app/utils': path.resolve(rootDir, '../../packages/utils/src'),
      '@app/ui': path.resolve(rootDir, '../../packages/ui/src'),
    },
  },
  server: {
    port: 5173,
  },
})
