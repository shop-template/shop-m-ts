import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/shop-m-ts/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
})
