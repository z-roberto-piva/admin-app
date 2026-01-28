import type { Components, Theme } from "@mui/material/styles";
import type { ButtonProps } from "@mui/material/Button";

export const components: Components<Theme> = {
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: 12,
        fontWeight: 600,
      },
    },
    variants: [
      {
        props: { variant: "soft" } satisfies Partial<ButtonProps>,
        style: {
          backgroundColor: "rgba(37, 99, 235, 0.12)",
          color: "rgb(37, 99, 235)",
        },
      },
    ],
  },
};
