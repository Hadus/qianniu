import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import requireTransform from 'vite-plugin-require-transform';
import path from 'path';
import legacy from '@vitejs/plugin-legacy'; // 处理打包module问题，可以file协议可以打开
import copyPlugin from 'rollup-plugin-copy'; // 打包中文件复制

export default defineConfig({
	base: './dist/',
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "./"),
			"@": path.resolve(__dirname, "./src"),
		},
		extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue']
	},
	plugins: [
		vue(),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		}),
		requireTransform({
      fileRegex: /.js$|.vue$/
    }),
		legacy({ targets: ['defaults', 'not IE 11'] })
	],
	optimizeDeps: {
		include: ['schart.js']
	},
	server: {
		host: '0.0.0.0', // 配置host 才可以外网访问
		port: 80, // 访问80端口不需要加端口号
		open: true,
	},
	build: {
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境移除console
      },
    },
    emptyOutDir: false, // 将此配置项设为false即可
    rollupOptions: {
      plugins: [
        copyPlugin({
          targets: [{ src: './src/mock/current/img/*', dest: 'dist/src/mock/current/img' }],
        }),
      ],
    },
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
