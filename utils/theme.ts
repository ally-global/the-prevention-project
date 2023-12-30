import React from "react";
import createTheme from "@mui/material/styles/createTheme";
import { PaletteOptions } from "@mui/material";

const fontFamily = "Acumin pro, Arial, sans-serif";

declare module "@mui/material" {
  interface PaletteOptions {
    PrimaryPurple: React.CSSProperties["color"];
    PrimaryBlue: React.CSSProperties["color"];
    Blue: React.CSSProperties["color"];
    PurpleMid: React.CSSProperties["color"];
    PurpleDark: React.CSSProperties["color"];
    Black: React.CSSProperties["color"];
    White: React.CSSProperties["color"];
    Red50: React.CSSProperties["color"];
    Red500: React.CSSProperties["color"];
    Red900: React.CSSProperties["color"];
    Grey50: React.CSSProperties["color"];
    Grey100: React.CSSProperties["color"];
    Grey200: React.CSSProperties["color"];
    Grey300: React.CSSProperties["color"];
    Grey400: React.CSSProperties["color"];
    Grey500: React.CSSProperties["color"];
    Grey600: React.CSSProperties["color"];
    Grey700: React.CSSProperties["color"];
    Grey800: React.CSSProperties["color"];
    Grey900: React.CSSProperties["color"];
  }
}

declare module "@mui/material/styles/createTypography" {
  interface TypographyOptions {
    section: React.CSSProperties;
    sectionMobile: React.CSSProperties;
    testimonial: React.CSSProperties;
    testimonialMobile: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    section: true;
    sectionMobile: true;
    testimonial: true;
    testimonialMobile: true;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    palette: PaletteOptions;
  }
  interface TypographyVariants {
    body3: React.CSSProperties;
    section: React.CSSProperties;
    sectionMobile: React.CSSProperties;
    testimonial: React.CSSProperties;
    testimonialMobile: React.CSSProperties;
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3: React.CSSProperties;
    section: React.CSSProperties;
    sectionMobile: React.CSSProperties;
    testimonial: React.CSSProperties;
    testimonialMobile: React.CSSProperties;
  }
}

const palette = {
  PrimaryPurple: "#673BDC",
  PrimaryBlue: "#00B8C5",
  PurpleMid: "#5538B7",
  PurpleDark: "#423591",
  Blue: "#347AD1",
  Black: "#000000",
  White: "#FFFFFF",
  Red50: "#F8E9E9",
  Red500: `#D32F2F`,
  Red900: "#ad0707",
  Grey50: "#FAFAFA",
  Grey100: "#F5F5F5",
  Grey200: "#E6E6E6",
  Grey300: "#E0E0E0",
  Grey400: "#BDBDBD",
  Grey500: "#9E9E9E",
  Grey600: "#757575",
  Grey700: "#616161",
  Grey800: "#424242",
  Grey900: "#212121",
};

export const theme = createTheme({
  spacing: 8,
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 0, sm: 600, md: 900, lg: 1536, xl: 1744 },
  },
  direction: "ltr",
  typography: {
    fontFamily: "Acumin Pro",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontFamily,
      fontSize: "96px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "115px",
      letterSpacing: "0",
      textAlign: "left",
      color: palette.Grey900,
    },
    h2: {
      fontFamily,
      fontSize: "64px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "77px",
      letterSpacing: "0em",
      textAlign: "center",
      color: palette.White,
    },
    h3: {
      fontFamily,
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "58px",
      letterSpacing: "0em",
      textAlign: "center",
      color: palette.White,
    },
    h4: {
      fontFamily,
      fontSize: "34px",
      fontStyle: "normal",
      fontWeight: "700",
      letterSpacing: "0em",
      textAlign: "left",
      color: palette.White,
    },
    h5: {
      fontFamily,
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "29px",
      letterSpacing: "0em",
      textAlign: "left",
      color: palette.White,
    },
    h6: {
      fontFamily,
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "22px",
      letterSpacing: "0em",
      textAlign: "left",
      color: palette.White,
    },
    body1: {
      fontFamily,
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "22px",
      letterSpacing: "0em",
      textAlign: "left",
      color: palette.White,
    },
    body2: {
      fontFamily,
      fontSize: "16px",
      fontStyle: "regular",
      fontWeight: "400",
      lineHeight: "19.2px",
      letterSpacing: "0em",
      paragraphSpacing: "22px",
      textAlign: "left",
      color: palette.Grey900,
    },
    body3: {
      fontFamily,
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "17px",
      letterSpacing: "0em",
      textAlign: "left",
      color: palette.Grey900,
    },
    section: {
      fontFamily,
      fontSize: "36px",
      fontStyle: "normal",
      lineHeight: "43px",
      letterSpacing: "0em",
      textAlign: "left",
      color: palette.Grey900,
    },
    sectionMobile: {
      fontFamily,
      fontSize: "24px",
      fontStyle: "normal",
      lineHeight: "29px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    testimonial: {
      fontFamily,
      fontSize: "36px",
      fontStyle: "normal",
      lineHeight: "43px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    testimonialMobile: {
      fontFamily,
      fontSize: "24px",
      fontStyle: "normal",
      lineHeight: "29px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    button: {
      fontFamily,
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "17px",
      letterSpacing: "0em",
      textAlign: "left",
      textTransform: "none",
    },
    caption: {
      fontFamily,
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "14px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    overline: {
      fontFamily,
      fontSize: "10px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "12px",
      letterSpacing: "0.02em",
      textAlign: "left",
    },
  },
  palette,
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          minHeight: `unset`,
          height: `100%`,
          display: `flex`,
          alignItems: `center`,
        },
      },
    },
  },
});

export default theme;
