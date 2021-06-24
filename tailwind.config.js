module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        km: {
          green: {
            lighter: '#154C4A',
            DEFAULT: '#103938',
            darker: '#0A2423'
          },
          gold: {
            lighter: '#C8A16A',
            DEFAULT: '#C19558',
            darker: '#BA8945'
          },
          gray: {
            'eee' : '#EEEEEE',
            '666' : '#666666',
            '333' : '#333333',
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
