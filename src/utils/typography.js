import Typography from 'typography'

const typography = new Typography({
    baseFontSize: '16px',
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
    overrideStyles: ({ adjustFontSizeTo, rhythm }) => ({
        h1: {
            fontSize: '100px',
            // ...adjustFontSizeTo('100px')
        },
        h2: {
            fontSize: '40px'
            // ...adjustFontSizeTo('40px')
        },
        h6: {
            fontSize: '25px'
            // ...adjustFontSizeTo('25px')
        },
        p: {
            fontSize: '14px'
        },
        'a, a:visited': {
            textDecoration: 'none'
        },
        'a: visited': {
            color: 'black'
        }
    })
})

// module.exports = typography

export default typography