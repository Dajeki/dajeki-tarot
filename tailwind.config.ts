import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			sans: "Rubik",
			serif: "Permanent Marker",
			card: "Mitr"
	  	},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			screens: {
				'portrait': {'raw': '(orientation: portrait)'},
				// => @media (orientation: portrait) { ... }
				'landscape': { 'raw': '(orientation: landscape)' },
				'thin': {'raw': '(min-aspect-ratio: 1/1)'}
			}
    	},
  	},
  plugins: [],
};
export default config;
