// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite', // slower spin
        'scroll-image': 'scrollImage 20s linear infinite', // new scroll animation
      },
      keyframes: {
        scrollImage: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }, // adjust -50% based on image height
        },
      },
    },
  },
  plugins: [],
};
