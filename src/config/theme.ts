import { createTheme } from "@mui/material/styles";
// import BebasNueue from "../fonts/bebas-neue/BebasNeue.woff2";
// import CircularSpotifyLight from "../fonts/circular-spotify/CircularSpotifyTextLight.woff2";
// import CircularSpotifyBold from "../fonts/circular-spotify/CircularSpotifyTextBold.woff2";
// import Lato from "../fonts/lato/Lato-Regular.woff2";
// import LatoBold from "../fonts/lato/Lato-Bold.woff2";
// import LatoSemiboldItalic from "../fonts/lato/Lato-SemiBoldItalic.woff2";


/**
 * Modify the types for the Typography module to remove h4, h5, h6, caption and overline
 */
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        h4: false;
        h5: false;
        h6: false;
        caption: false;
        overline: false;
    }
}

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
        // primary: {
        //     main: "#651FFF",
        //     light: "#834BFF",
        //     dark: "#4615B2",
        //     contrastText: "#fff",
        // },

        // secondary: {
        //     main: "#00B0FF",
        //     light: "#33BFFF",
        //     dark: "#007BB2",
        //     contrastText: "#fff",
        // },
    },

    typography: {
        fontFamily: ["BebasNueue", "CircularSpotify", "Lato"].join(","),

        allVariants: {
            textTransform: "none",
        },

        h1: {
            fontFamily: "BebasNueue",
            fontWeight: "400",
            textTransform: "uppercase",
            textAlign: "left",            fontSize: "3rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "2.5rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "2rem",
            },
        },

        h2: {
            fontFamily: "BebasNueue",
            fontWeight: "400",
            textTransform: "uppercase",
            textAlign: "left",            fontSize: "2.25rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "2rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "1.75rem",
            },
        },

        h3: {
            fontFamily: "BebasNueue",
            fontWeight: "400",
            textTransform: "uppercase",
            textAlign: "left",            fontSize: "2rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "1.7rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "1.4rem",
            },
        },

        h4: undefined,
        h5: undefined,
        h6: undefined,

        button: {
            fontFamily: "CircularSpotify",
            fontWeight: "bold",
            fontSize: "0.9375rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "0.8rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.7rem",
            }
        },

        body1: {
            fontFamily: "CircularSpotify",
            fontSize: "1.25rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "1.05rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.9rem",
            }
        },

        body2: {
            fontFamily: "CircularSpotify",
            fontSize: "0.9375rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "0.8rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.7rem",
            }
        },

        subtitle1: {
            fontFamily: "Lato",
            fontSize: "1rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "0.85rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.65rem",
            }
        },

        subtitle2: {
            fontFamily: "Lato",
            fontSize: "0.75rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "0.7rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.65rem",
            }
        },

        caption: {
            fontFamily: "Lato",
            fontSize: "0.75rem",
            [theme.breakpoints.down("md")]: {
                fontSize: "0.7rem",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.65rem",
            }
        },
        overline: undefined,
    },

    // components: {
    //     MuiCssBaseline: {
    //         /**
    //          * The following styles overrides declares the custom fonts used in the application
    //          */
    //         styleOverrides: `
    //             @font-face {
    //                 font-family: 'CircularSpotify';
    //                 src: url(${CircularSpotifyBold}) format('woff2');
    //                 font-weight: bold;
    //                 font-style: normal;
    //             }
                
    //             @font-face {
    //                 font-family: 'CircularSpotify';
    //                 src: url(${CircularSpotifyLight}) format('woff2');
    //                 font-weight: normal;
    //                 font-style: normal;
    //             }
                
    //             @font-face {
    //                 font-family: 'BebasNueue';
    //                 src: url(${BebasNueue}) format('woff2');
    //                 font-weight: normal;
    //                 font-style: normal;
    //             }
                
    //             @font-face {
    //                 font-family: 'Lato';
    //                 src: url(${LatoBold}) format('woff2');
    //                 font-weight: bold;
    //                 font-style: normal;
    //             }
                
    //             @font-face {
    //                 font-family: 'Lato';
    //                 src: url(${Lato}) format('woff2');
    //                 font-weight: normal;
    //                 font-style: normal;
    //             }
                
    //             @font-face {
    //                 font-family: 'Lato';
    //                 src: url(${LatoSemiboldItalic} format('woff2');
    //                 font-weight: 500;
    //                 font-style: italic;
    //             }
    //         `,
    //     },
    // },
});