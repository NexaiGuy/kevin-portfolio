/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/**/*.{js,jsx",
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
	fonFamily: {
		primary: "var(--font-jetbrainsMono)",
	},

  	extend: {
  		keyframes: {
			"accordion-down": {
				from: { height: "0"}
			},
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
