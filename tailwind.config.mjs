/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				DM: ['DM Serif Display', 'sans-serif']
			}
		},
		colors: {
			DarkViolet: 'hsl(256, 26%, 20%)',
			GrayishBlue: 'hsl(216, 30%, 68%)',
			white: '#fff',
			VeryDarkViolet: 'hsl(270, 9%, 17%)',
			DarkGrayishViolet: 'hsl(273, 4%, 51%)',
			VeryLightGray: 'hsl(0, 0%, 98%)'
		}
	},
	plugins: []
}
