/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customDashboardColor: "#010416",
        customBgColor: "#f7f8fa",
        customEmojiBgColor: "#eaf2f8",
        customRangeColor: "#ecf1f5",
        customLineColor: "#266df1",
      },
    },
  },
  plugins: [],
};
