import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'best_moviecard_collection', // 깃허브 리포지토리와 같음
  plugins: [react()],
  server : {
    fs: {
      strict: false,
    },
    historyApiFallback: true,
  },
})
