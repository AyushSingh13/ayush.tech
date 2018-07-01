module.exports = {
    siteMetadata: {
        title: 'Ayush Vijay Singh',
        url: 'https://ayushsingh13.github.io',
        description: 'Ayush is a student at UCL aspiring to make an impact through software engineering, data science and entrepreneurship.',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        `gatsby-plugin-styled-components`,
    ],
}