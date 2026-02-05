/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-black': '#050505',
                'surface': '#111111',
                'neon-lime': '#39FF14',
            },
            fontFamily: {
                'space': ['Space Grotesk', 'sans-serif'],
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': {
                        boxShadow: '0 0 20px rgba(57, 255, 20, 0.5), 0 0 40px rgba(57, 255, 20, 0.3)',
                    },
                    '50%': {
                        boxShadow: '0 0 30px rgba(57, 255, 20, 0.8), 0 0 60px rgba(57, 255, 20, 0.5)',
                    },
                },
                'marquee': {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
}
