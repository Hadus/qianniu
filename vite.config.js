import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import requireTransform from 'vite-plugin-require-transform';
import path from 'path';

export default defineConfig({
	base: './',
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
	],
	optimizeDeps: {
		include: ['schart.js']
	},
	server: {
		port: 3000,
		open: true,
	},
});
