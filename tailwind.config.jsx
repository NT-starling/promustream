/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],


  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1c536e",
        
"secondary": "#0c2531",
        
"accent": "#3b9dce",
        
"neutral": "#1f2937",
        
"base-100": "#091c25",
        
"info": "#87cade",
        
"success": "#4ad9a4",
        
"warning": "#e8b52c",
        
"error": "#9a3412",
        },
      },
    ],
  },


};
