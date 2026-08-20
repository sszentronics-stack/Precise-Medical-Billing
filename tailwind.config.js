/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        headline: ["Figtree", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        card: "0 4px 12px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)",
        lift: "0 12px 32px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.04)",
        overlay: "0 20px 48px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
