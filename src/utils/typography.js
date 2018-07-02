import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  googleFonts: [
    {
      name: "Lato",
      styles: ["100", "300"]
    }
  ],
  headerFontFamily: ["Lato"],
  headerWeight: 300,
  headerGray: 100,
  bodyGray: 100,
  bodyWeight: 200,
  bodyFontFamily: ["Lato"],
  overrideStyles: ({ rhythm }) => ({
    h1: {
      fontSize: "25px"
    },
    h2: {
      fontSize: "20px"
    },
    p: {
      fontSize: "14px"
    },
    "a, a:visited": {
      textDecoration: "none"
    },
    "a: visited": {
      color: "black"
    }
  })
});

export default typography;
