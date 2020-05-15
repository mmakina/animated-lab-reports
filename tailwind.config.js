module.exports = {
  theme: {
    extend: {
    colors: {
      'brand-color': '#F8751A',
      'brand-color-darken':'#2A2D2E',
      'back':'#f3f3f3'
    }
    },

  },
  variants: {
    backgroundColor:['responsive','hover','focus','active']
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}
