/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/**/*.{js,jsx,ts,tsx,mdx}", // Added missing tsx and mdx here
	],
	prefix: "",
	theme: {
	  container: {
		center: true,
		padding: "15px",
	  },
	  screens: {
		sm: '640px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
	  },
	  extend: {
		
		colors: {
			primary: '#1c1c22',
			accent: {
				DEFAULT: '#00ff99',
				hover: '#00e'
			}
		}

		fontFamily: {
		  primary: "var(--font-jetbrainsMono)",
		},
		keyframes: {
		  "accordion-down": {
			from: { height: "0" },
			to: { height: "var(--accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--accordion-content-height)" },
			to: { height: "0" },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  