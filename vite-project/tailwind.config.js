/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'sd': '1023px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        'blob-bounce': {
          '0%': {
            transform: 'translate(-100%, -100%) translate3d(0, 0, 0)',
          },
          '25%': {
            transform: 'translate(-100%, -100%) translate3d(100%, 0, 0)',
          },
          '50%': {
            transform: 'translate(-100%, -100%) translate3d(100%, 100%, 0)',
          },
          '75%': {
            transform: 'translate(-100%, -100%) translate3d(0, 100%, 0)',
          },
          '100%': {
            transform: 'translate(-100%, -100%) translate3d(0, 0, 0)',
          },
        },
      },
      animation: {
        'blob-bounce': 'blob-bounce 5s infinite ease',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

