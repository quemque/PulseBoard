import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vitest/config'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => ({
   plugins: [
      tailwindcss(),
      react(),
      babel({ presets: [reactCompilerPreset()] }),
   ],
   resolve: {
      alias: {
         '@': path.resolve(dirname, './src'),
      },
   },
   base: mode === 'production' ? '/PulseBoard/' : '/',
   test: {
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
   },
}))
