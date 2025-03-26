import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@assets': '/src/assets',
			'@components': '/src/components',
			'@views': '/src/views',
		}
	},
	server: {
		allowedHosts: ['rwmc.top']
	}
});