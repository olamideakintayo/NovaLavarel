module.exports = {
  content: ['./src/**/*.{html,js,css}', './public/index.html'],
  theme: {
    extend: {
      colors:{
        primary: {
          100: '#4099DE',
          200: '#AAF1FF'

        },
        hero: {
          100: '#2891c4',
        },
        mixt: {
          100: '#125b93',
        },
        secondary: {
          100: '#26425F',
          200: '#888883',
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
    backgroundSize: {
      '80': 80,
      '50%': 50,
    },
  },
  Width: {
    '1/2' : 100
  },
  spacing: {
    '132': '32rem',
  },
  plugins: [],
}
