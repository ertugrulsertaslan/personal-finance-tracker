/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myriad: ["Myriad", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
      },

      colors: {
        cobalt: {
          50: "#edf7ff",
          100: "#d6ecff",
          200: "#b5dfff",
          300: "#83cdff",
          400: "#49b0ff",
          500: "#1f8bff",
          600: "#076aff",
          700: "#0152f4",
          800: "#0842c5",
          900: "#0f42a9",
          950: "#0e265d",
        },
        customDashboardColor: "#010416",
        customBgColor: "#f7f8fa",
        customEmojiBgColor: "#eaf2f8",
        customRangeColor: "#ecf1f5",
        customLineColor: "#266df1",
        customCardBgColor: "#103898",
        customCardBtnBgColor: "#f1f8ff",
        customCardBtnTextColor: "#0674fb",
      },
    },
  },
  plugins: [],
};
