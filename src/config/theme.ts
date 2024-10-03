import { createTheme } from "@mui/material/styles";
import ClashDisplayBold from "../assets/fonts/ClashDisplay-Bold.woff2";
import ClashDisplayExtralight from "../assets/fonts/ClashDisplay-Extralight.woff2";
import ClashDisplayLight from "../assets/fonts/ClashDisplay-Light.woff2";
import ClashDisplayMedium from "../assets/fonts/ClashDisplay-Medium.woff2";
import ClashDisplayRegular from "../assets/fonts/ClashDisplay-Regular.woff2";
import ClashDisplaySemibold from "../assets/fonts/ClashDisplay-Semibold.woff2";
import { indigo, pink } from "@mui/material/colors";

const theme = createTheme();

/**
 * Creates a new default theme for the application
 *
 * Contains the primary and secondary color palette
 * Contains all the necessary Typography settings as well
 *
 * @returns {Theme} A default theme for the application
 *
 */
export default createTheme({
    palette: {
        primary: {
            main: indigo["A400"],
            light: indigo["A200"],
            dark: indigo[700],
            contrastText: "#fff",
        },

        secondary: {
            main: pink[500],
            light: pink[300],
            dark: pink[700],
            contrastText: "#fff",
        },
    },

    typography: {
        fontFamily: "ClashDisplay",

        allVariants: {
            fontFamily: "ClashDisplay",
        },

        h1: {
            fontSize: "3rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "2.5rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "2rem",
            },
        },

        h2: {
            fontSize: "2.25rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "2rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "1.75rem",
            },
        },

        h3: {
            fontSize: "2rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "1.7rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "1.4rem",
            },
        },

        h4: {
            fontSize: "1.75rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "1.5rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "1.3rem",
            },
        },

        button: {
            fontSize: "0.9375rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "0.8rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.7rem",
            },
        },

        body1: {
            fontSize: "1.25rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "1.05rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.9rem",
            },
        },

        body2: {
            fontSize: "0.9375rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "0.8rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.7rem",
            },
        },

        subtitle1: {
            fontSize: "1rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "0.85rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.65rem",
            },
        },

        subtitle2: {
            fontSize: "0.75rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "0.7rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.65rem",
            },
        },

        caption: {
            fontSize: "0.75rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "0.7rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.65rem",
            },
        },
        overline: undefined,
    },

    components: {
        MuiCssBaseline: {
            /**
             * The following styles overrides declares the custom fonts used in the application
             */
            styleOverrides: `
                @font-face {
                    font-family: 'ClashDisplay';
                    src: url(${ClashDisplayBold}) format('woff2');
                    font-weight: 700;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'ClashDisplay';
                    src: url(${ClashDisplaySemibold}) format('woff2');
                    font-weight: 600;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'ClashDisplay';
                    src: url(${ClashDisplayMedium}) format('woff2');
                    font-weight: 500;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'ClashDisplay';
                    src: url(${ClashDisplayRegular}) format('woff2');
                    font-weight: 400;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'ClashDisplay';
                    src: url(${ClashDisplayLight}) format('woff2');
                    font-weight: 300;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'ClashDisplay';
                    src: url(${ClashDisplayExtralight}) format('woff2');
                    font-weight: 200;
                    font-style: normal;
                }
            `,
        },
    },
});
