import { createTheme } from "@mui/material/styles";
import { tokens } from "./tokens";
import { components } from "./components";

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class", // useremo class su <body>
  },

  colorSchemes: {
    light: {
      palette: {
        primary: { main: tokens.brand.primary },
        background: {
          default: "#f5f7fb",
          paper: "#ffffff",
        },
      },
    },
    dark: {
      palette: {
        primary: { main: "#60a5fa" },
        background: {
          default: "#0b1220",
          paper: "#111a2e",
        },
      },
    },
  },

  typography: {
    fontFamily: tokens.font.family,
    h5: { fontWeight: 800 },
    h6: { fontWeight: 800 },
  },

  shape: { borderRadius: tokens.radius },

  components,
});
