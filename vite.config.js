// import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'


// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(), vueJsx()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })

import { defineConfig, loadEnv } from 'vite' // 帮手函数，这样不用 jsdoc 注解也可以获取类型提示
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import sass from 'sass'

// https://vitejs.dev/config/
export default  defineConfig(({command, mode })=>{
  return{
    //项目部署在主域名的子文件使用,例如http://localhost:3000/myvite/。不填默认就是/
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
          //别名配置
          "~": path.resolve(__dirname, "./"), //配置的别名
          "@": path.resolve(__dirname, "./src"),
        },
        //共享配置 https://cn.vitejs.dev/config/shared-options.html#resolve-extensions
        extensions : ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json','.vue']
    },
    //本地运行配置，以及反向代理配置
    server: {
      port: "9000",//端口
      // host: "localhost",//ip地址例如192.168.1.177
      host:true,
      open: true,//服务启动时自动在浏览器中打开应用
      // 反向代理配置
      proxy: { //配置多个代理
        '/dev-api': {
          target: "https://xxxx.com/",//例子:http://192.168.1.177:8080 或测试服务器https://xxxx.com
          changeOrigin: true,///设置访问目标地址允许跨域
          rewrite: (p) => p.replace(/^\/dev-api/, '')
        },
        '/prod-api': {
          target: "https://xxxx.com/",
          changeOrigin: true,///设置访问目标地址允许跨域
          rewrite: (p) => p.replace(/^\/prod-api/, '')
        },
      }
    },
    css: {
      preprocessorOptions: {
        sass: {
          implementation: sass,
        },
      },
    },
  }
})