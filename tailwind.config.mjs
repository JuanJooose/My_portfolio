/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#6c3eed',
				'secondary': '#402a85',
				'third': '#27194d',
				'fourd': '#a5a1ff',
				'fiveth': '#0b0028'
			},
		},
	},
	plugins: [],
}
