/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        brand:'#248BCB',
        brand2:'#F83F37'
      },
      backgroundImage: {
        janitorial1:'url(/src/assets/janitorialfoto1.png)',
        janitorial2:'url(/src/assets/janitorialfoto2.png)'
      },
    },
  },
  plugins: [],
}
