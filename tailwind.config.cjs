/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {
			screens: {
				'xs': '200px',
				...defaultTheme.screens,
			},},
	},
	plugins: [
		require("daisyui"),
		require("postcss-import"),
		require('tailwindcss/nesting')(require('postcss-nesting')),
		require("@tailwindcss/typography")
	],
	daisyui: {
		themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "night", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}
