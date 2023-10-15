import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
            100: "#000000",
            200: "#00020B",
            300: "#000315",
            400: "#000420",
            500: "#00052A",
            600: "#000735"
          },
          darkpalette: {
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
          rose: {
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
          darkblue: {
            100: "#001845",
            200: "#002855",
            300: "#023e7d",
            400: "#0353a4",
            500: "#0466c8"
          },
          lime: {
            100: "#aacc00",
            200: "#bfd200",
            300: "#d4d700",
            400: "#dddf00",
            500: "#eeef20"
          },
      }
    : 
    {
      primary: {
          100: "#E9ECEF",
          200: "#DEE2E6",
          300: "#CED4DA",
          400: "#ADB5BD",
          500: "#6C757D",
          600: "#495057"
        },
        lightpalette: {
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
        blue: {
          100: "#abc4ff",
          200: "#B6CCFE",
          300: "#C1D3FE",
          400: "#ccdbfd",
          500: "#d7e3fc",
          600: "#e2eafc"
        },
        pink: {
          100: "#fb6f92",
          200: "#ff8fab",
          300: "#ffb3c6",
          400: "#ffc2d1",
          500: "#ffe5ec"
        },
        amber: {
          100: "#f59e0b",
          200: "#fbbf24",
          300: "#fcd34d",
          400: "#fde68a",
          500: "#fef3c7"
        },
        peach: {
          100: "#EF6351",
          200: "#F38375",
          300: "#F7A399",
          400: "#FBC3BC",
          500: "#FFE3E0"
        },
        lily: {
          100: "#F2A8FF",
          200: "#FFB7FF",
          300: "#FFC4FF",
          400: "#FFC9FF",
          500: "#FFCEFF"
        }
    }),
});

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
                main: colors.darkpalette[200],
              },
              secondary: {
                main: colors.darkpalette[800],
              },
              neutral: {
                dark: colors.darkpalette[700],
                main: colors.rose[400],
                light: colors.darkpalette[500],
              },
              background: {
                default: colors.primary[200],
              },
          }
        : {
            // palette values for light mode
            primary: {
                main: colors.lightpalette[200],
              },
              secondary: {
                main: colors.lightpalette[800],
              },
              neutral: {
                dark: colors.lightpalette[500],
                main: colors.lily[400],
                light: colors.lightpalette[700],
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


{
  /* 
     colorone: {
    blueone: "#abc4ff",
    pinkone: "#fb6f92",
    amberone: "#f59e0b",
    roseone: "#FF0A54",
    redone: "#AA0000",
    peachone: "#EF6351",
    voiletone: "#612081",
    lilyone: "#F2A8FF",
    orangeone: "#ff7b00",
    yellowone: "#ffb700",
    darkblueone: "#001845",
    limeone: "#aacc00",
  },
  colortwo: {
    bluetwo: "#B6CCFE",
    pinktwo: "#ff8fab",
    ambertwo: "#fbbf24",
    rosetwo: "#FF477E",
    redtwo: "#BB0000",
    peachtwo: "#F38375",
    voilettwo: "#6E1F82",
    liliytwo: "#FFB7FF",
    oragetwo: "#ff8800",
    yellowtwo: "#ffc300",
    darkbluetwo: "#002855",
    limetwo: "#bfd200",
  },
  colorthree: {
    bluethree: "#C1D3FE",
    pinkthree: "#ffb3c6",
    amberthree: "#fcd34d",
    rosethree: "#FF5C8A",
    redthree: "#CD0000",
    peachthree: "#F7A399",
    voiletthree: "#7B1E83",
    lilythree: "#FFC4FF",
    orangethree: "#ff9500",
    yellowthree: "#ffd000",
    darkbluethree: "#023e7d",
    limethree: "#d4d700",
  },
  colorfour: {
    bluefour: "#ccdbfd",
    pinkfour: "#ffc2d1",
    amberfour: "#fde68a",
    rosefour: "#FF7096",
    redfour: "#DE1616",
    peachfour: "#FBC3BC",
    voiletfour: "#871C84",
    lilyfour: "#FFC9FF",
    orangefour: "#ffa200",
    yellowfour: "#ffdd00",
    darkbluefour: "#0353a4",
    limefour: "#dddf00",
  },
  colorfive: {
    bluefive: "#d7e3fc",
    pinkfive: "#ffe5ec",
    amberfive: "#fef3c7",
    rosefive: "#FF85A1",
    redfive: "#EF2B2B",
    peachfive: "#FFE3E0",
    voiletfive: "#941B85",
    lilyfive: "#FFCEFF",
    orangefive: "#ffaa00",
    yellowfive: "#ffea00",
    darkbluefive: "#0466c8",
    limefive: "#eeef20",
  },
*/
}




  
