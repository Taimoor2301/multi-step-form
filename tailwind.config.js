/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				c1: "hsl(213, 96%, 18%)",
				c2: "hsl(243, 100%, 62%)",
				c3: "hsl(228, 100%, 84%)",
				c4: "hsl(206, 94%, 87%)",
				c5: "hsl(354, 84%, 57%)",
				n1: "hsl(231, 11%, 63%)",
				n2: "hsl(229, 24%, 87%)",
				n3: "hsl(217, 100%, 97%)",
				n4: "hsl(231, 100%, 99%)",
			},
			fontFamily: {
				ubuntuR: ["ubuntu-Regular"],
				ubuntuM: ["ubuntu-Medium"],
				ubuntuB: ["ubuntu-Bold"],
			},
		},
	},
	plugins: [],
};
