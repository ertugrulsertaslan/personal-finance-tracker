/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myriad: ["Myriad"],
      },
      colors: {
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
