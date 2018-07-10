module.exports = {
  siteMetadata: {
    titleSuffix: " | ayush singh",
    homeTitle: "home | ayush singh",
    blogTitle: "blog | ayush singh",
    url: "https://ayushsingh13.github.io",
    description:
      "Ayush is a student at UCL aspiring to make an impact through software engineering, data science and entrepreneurship."
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-prismjs"]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/static/blog`
      }
    }
  ]
};
