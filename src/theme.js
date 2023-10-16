import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => {
  if (mode === 'dark') {
    return {
      primary: {
        100: "#000000",
        200: "#00020B",
        300: "#000315",
        400: "#000420",
        500: "#00052A",
        600: "#000735"
      },
      colorpalette: {
        100: "#001219",
        200: "#005F73",
        300: "#0A9396",
        400: "#94D2BD",
        500: "#E9D8A6",
        600: "#EE9B00",
        700: "#CA6702",
        800: "#BB3E03",
        900: "#AE2012",
        1000: "#9B2226"
      },
      pink: {
        100: "#FF0A54",
        200: "#FF477E",
        300: "#FF5C8A",
        400: "#FF7096",
        500: "#FF85A1"
      },
      red: {
        100: "#AA0000",
        200: "#BB0000",
        300: "#CD0000",
        400: "#DE1616",
        500: "#EF2B2B"
      },
      voilet: {
        100: "#612081",
        200: "#6E1F82",
        300: "#7B1E83",
        400: "#871C84",
        500: "#941B85"
      },
      orange: {
        100: "#ff7b00",
        200: "#ff8800",
        300: "#ff9500",
        400: "#ffa200",
        500: "#ffaa00"
      },
      yellow: {
        100: "#ffb700",
        200: "#ffc300",
        300: "#ffd000",
        400: "#ffdd00",
        500: "#ffea00"
      },
      blue: {
        100: "#001845",
        200: "#002855",
        300: "#023e7d",
        400: "#0353a4",
        500: "#0466c8"
      },
     }
  }
  else if (mode === 'light') {
    return {
      primary: {
        100: "#E9ECEF",
        200: "#DEE2E6",
        300: "#CED4DA",
        400: "#ADB5BD",
        500: "#6C757D",
        600: "#495057"
      },
      colorpalette: {
        100: "#B9ADC8",
        200: "#C3B5CB",
        300: "#D4C0C5",
        400: "#CEC6C5",
        500: "#CDD3CD",
        600: "#C3D3D0",
        700: "#A1CACA",
        800: "#81C1CE",
        900: "#81B6D2",
        1000: "#A7A7D6"
      },
      pink: {
        100: "#fb6f92",
        200: "#ff8fab",
        300: "#ffb3c6",
        400: "#ffc2d1",
        500: "#ffe5ec"
      },
      red: {
        100: "#EF6351",
        200: "#F38375",
        300: "#F7A399",
        400: "#FBC3BC",
        500: "#FFE3E0"
      },
      voilet: {
        100: "#F2A8FF",
        200: "#FFB7FF",
        300: "#FFC4FF",
        400: "#FFC9FF",
        500: "#FFCEFF"
      },
      orange: {
        100: "#f59e0b",
        200: "#fbbf24",
        300: "#fcd34d",
        400: "#fde68a",
        500: "#fef3c7"
      },
      yellow: {
        100: '#FFDA0A',
        200: '#FFDD1F',
        300: '#FFE433',
        400: '#FFE747',
        500: '#FFEC5C',
      },
      blue: {
        100: "#abc4ff",
        200: "#B6CCFE",
        300: "#C1D3FE",
        400: "#ccdbfd",
        500: "#d7e3fc",
        600: "#e2eafc"
      },  
     }
  }
  else if (mode === 'glass') {
    return { 
      red: {
        100: "#FF616D",
        200: "#FF8E98",
        300: "#FFBAC4",
        400: "#FFD7E1",
        500: "#FFEFEF",
      },
      
      pink: {
        100: "#FF6B99",
        200: "#FF90B5",
        300: "#FFB5D1",
        400: "#FFCDE2",
        500: "#FFE4F0",
      },
      
      blue: {
        100: "#7B96FD",
        200: "#A1B2FF",
        300: "#C7CCFF",
        400: "#E0E6FF",
        500: "#F2F6FF",
      },
      
      lavender: {
        100: "#B48CFE",
        200: "#C8A4FF",
        300: "#DAC2FF",
        400: "#E8D7FF",
        500: "#F3E9FF",
      },
      
      yellow: {
        100: "#FFC83D",
        200: "#FFD76E",
        300: "#FFE49F",
        400: "#FFF2CC",
        500: "#FFF9E6",
      },
      
      orange: {
        100: "#FF964E",
        200: "#FFAE73",
        300: "#FFC597",
        400: "#FFD7B9",
        500: "#FFE9D5",
      },
      
      green: {
        100: "#51DE7A",
        200: "#76E693",
        300: "#9CE9AD",
        400: "#BDF3C7",
        500: "#D6FCE2",
      },
      
      lime: {
        100: "#BFFD68",
        200: "#D7FF8A",
        300: "#E6FFAC",
        400: "#F0FFCB",
        500: "#F8FFEA",
      },
      
      lilac: {
        100: "#A394FF",
        200: "#B4A8FF",
        300: "#C4BCFF",
        400: "#D4D0FF",
        500: "#E4E4FF",
      },
      
      peach: {
        100: "#FFA15E",
        200: "#FFB97C",
        300: "#FFD5A2",
        400: "#FFEDC5",
        500: "#FFF8E5",
      },
      
      teal: {
        100: "#4FD9D6",
        200: "#6EE8E3",
        300: "#8EF7F0",
        400: "#A9FDFA",
        500: "#C4FFFF",
      },
      
      aqua: {
        100: "#3CCCE4",
        200: "#63D7EB",
        300: "#8EDDF3",
        400: "#B6E9FA",
        500: "#D7F5FF",
      },
      
      mint: {
        100: "#7CFB98",
        200: "#A3FCAE",
        300: "#C4FCC3",
        400: "#DFFED9",
        500: "#F3FFF0",
      },
      
      skyBlue: {
        100: "#58B0FF",
        200: "#7CBFFF",
        300: "#9FD0FF",
        400: "#BFE4FF",
        500: "#D6F1FF",
      },
      
      babyPink: {
        100: "#FF9BC7",
        200: "#FFB7D9",
        300: "#FFCCE9",
        400: "#FFE3F6",
        500: "#FFF6FE",
      },
      
      rosePink: {
        100: "#FF709B",
        200: "#FF8CB2",
        300: "#FFA5C7",
        400: "#FFBDDA",
        500: "#FFD3ED",
      }, 
     }
  }
     
};

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
                main: colors.colorpalette[200],
              },
              secondary: {
                main: colors.colorpalette[800],
              },
              neutral: {
                dark: colors.palette[700],
                main: colors.pink[400],
                light: colors.colorpalette[500],
              },
              background: {
                default: colors.primary[200],
              },
          }
        : {
            // palette values for light mode
            primary: {
                main: colors.colorpalette[200],
              },
              secondary: {
                main: colors.colorpalette[800],
              },
              neutral: {
                dark: colors.colorpalette[500],
                main: colors.voilet[400],
                light: colors.colorpalette[700],
              },
              background: {
                default: colors.primary[200],
              },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};