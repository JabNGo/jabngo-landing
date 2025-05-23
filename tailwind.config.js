export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-cream",
    "text-cream",
    "bg-primary",
    "text-primary",
    "bg-coal",
    "text-coal",
    "border-coal",
    "border-cream",
    "border-primary",
    "hover:bg-primary-dark",
    "hover:text-primary",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f8fad8",
        primary: "#e31b24",
        royal: "#214d8b",
        gold: "#ffb613",
        "fight-green": "#004c31",
        coal: "#242324",
      },
    },
  },
  plugins: [],
};
