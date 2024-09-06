/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./pages/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./composables/**/*.{js,ts}",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
