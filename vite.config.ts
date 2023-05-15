import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from '@rollup/plugin-eslint';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
	server: { https: true },
	plugins: [
		{ ...eslint({ include: 'src/**/*.+(js|jsx|ts|tsx)' }), enforce: 'pre' },
		react(),
		mkcert(),
	],
});
