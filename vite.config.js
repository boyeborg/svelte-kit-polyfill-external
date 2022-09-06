import { sveltekit } from '@sveltejs/kit/vite';
import vitePlugin from './vite-plugin';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), vitePlugin()]
};

export default config;
