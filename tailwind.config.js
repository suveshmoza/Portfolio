/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'custom-blue': '#00a4ff',
				gold: '#ffd700',
				wood: '#502900',
				linkedin: '#0072b1',
				twitter: '#00acee',
				instagram: '#fb3958',
			},
		},
	},
	plugins: [],
};
