/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Raleway', 'sans'],
			},
			fontWeight: {
				rale400: '400',
				rale700: '700',
			},
			fontSize: {
				base: ['1.6rem'],
			},
			container: {
				center: true,
			},
			colors: {
				gradient: 'hsl(6, 100%, 80%) to hsl(335, 100%, 65%)',
				blue: {
					0: '#1f2d69',
					100: '#24053E',
					200: '#584D62',
					300: '#FCF8FF',
					400: '#141f4a'
				},
			},
		},
	},
	plugins: [],
}
