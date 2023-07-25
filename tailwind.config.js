/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                blue: {
                    50: '#F4F9FF',
                    75: '#DFEEFF',
                    100: '#F1F7FF',
                    200: '#DAE9FF',
                    700: '#2639ED',
                    800: '#0f20bd',
                },
                white: '#ffffff',
                black: '#000000',
                neutral: {
                    200: '#A4A4A4',
                    300: '#565656',
                    400: '#959595',
                    500: '#757575',
                },
                zinc: {
                    100: '#F2F2F2',
                    200: '#F1F1F1',
                },
                green: {
                    100: '#DEFFEE',
                },
                pink: {
                    100: '#FFF2F8',
                    600: '#FF007A',
                },
                yellow: {
                    100: '#FFF7E3',
                },
                orange: {
                    100: '#FFF5DB',
                },
                indigo: {
                    100: '#EFF1FF',
                },
                sky: {
                    100: '#E7F0FC',
                },
            },
            boxShadow: {
                xl: '10px 20px 50px 0px #00000026',
                card: '0px 10px 50px 0px rgba(0, 0, 0, 0.05)',
                showcase: '10px 20px 50px 0px rgba(0, 0, 0, 0.15)',
            },
            letterSpacing: {
                wide: '0.01rem',
            },
            fontSize: {
                heading: '2.5rem',
                title: '1.75rem',
            },
            gridTemplateRows: {
                12: 'repeat(12, minmax(0, 30px))',
                9: 'repeat(9, minmax(0, 100px))',
            },
            gridTemplateColumns: {
                12: 'repeat(12, minmax(0, 30px))',
                9: 'repeat(9, minmax(0, 80px))',
            },
            gridRowStart: {
                8: '8',
                9: '9',
                10: '10',
            },
        },
    },
    plugins: [],
}
