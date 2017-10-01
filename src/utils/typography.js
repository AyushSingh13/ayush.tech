import Typography from 'typography'
import moraga from 'typography-theme-moraga'

const typography = new Typography({
    baseFontSize: '18px',
    googleFonts: [  
        {
            name: 'Poppins',
            styles: ['100', '300']
        }
    ],
    headerFontFamily: ['Poppins', 'Helvetica'],
    headerWeight: 300,
    headerGray: 100,
    bodyGray: 100,
    bodyWeight: 200,
    bodyFontFamily: ['helvetica'],
    overrideStyles: () => ({
        h1: {
            fontSize: '100px',
        },
        h2: {
            fontSize: '40px'
        },
        h6: {
            fontSize: '25px'
        },
        'a, a:visited': {
            textDecoration: 'none'
        },
        'a: visited': {
            color: 'black'
        }
    })
})

module.exports = typography