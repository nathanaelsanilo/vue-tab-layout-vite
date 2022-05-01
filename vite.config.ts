import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { fileURLToPath, URL } from "url";

import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'

const path = require('path')
const fs = require('fs')

const DynamicComponentResolver = (name: string) => {
  console.log(name)
  const file = path.resolve(__dirname, `src/components/${name}.vue`)

  if (fs.existsSync(file)) {
    return file
  }
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      extensions: ['vue']
    }),
    Layouts(),
    Components({
      resolvers: [
        HeadlessUiResolver(),
      ],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
      ],
      imports: [
        'vue',
        'vue-router',
      ],
      resolvers: [
        DynamicComponentResolver,
      ]
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  }
})
