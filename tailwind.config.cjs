/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {},
	},
	plugins: [
		require("daisyui"),
		require("postcss-import"),
		require('tailwindcss/nesting')(require('postcss-nesting')),
		require("@tailwindcss/typography")
	],
	daisyui: {
		themes: [
		  {
			mytheme: {
			   "primary": "#f3f4f6",
			   "secondary": "#d1d5db",
			   "accent": "#9ca3af",
			   "neutral": "#ffffff",
			   "base-100": "#111827",
			   "info": "#22c55e",
			   "success": "#3b82f6",
			   "warning": "#fde047",
			   "error": "#991b1b",
			},
		  },
		],
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}
