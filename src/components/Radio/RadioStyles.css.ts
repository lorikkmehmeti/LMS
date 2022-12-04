import { globalStyle, style } from "@vanilla-extract/css";
import { themes } from "../../styles/theme";
import { FONT_VARIATIONS } from "../../styles/theme/tokens";

export const StyledRadioItem = style({
  all: "unset",
  background: themes.tokens.colors.background_surface,
  width: 20,
  height: 20,
  borderRadius: "100%",
  boxShadow: `0 0 0 1px ${themes.tokens.colors.border_dark}`,
  transition: "background 150ms ease",
  zIndex: 2,
  position: "relative",
  selectors: {
    "&:not(disabled):not(:focus):not([data-state=checked]):hover": {
      "@media": {
        "(hover)": {
          background: themes.tokens.colors.background_medium,
        },
      },
    },
    "&:focus-visible": { boxShadow: `0 0 0 2px #2C2C2E` }, // TODO replace with color
    "&:not([disabled])[data-state=checked]": {
      background: themes.tokens.colors.primary[500],
      boxShadow: `0 0 0 1px ${themes.tokens.colors.primary["500"]}`,
    },
    "&[data-state=checked][data-disabled][disabled]": {
      background: `rgba(255, 255, 255, 0.06)`, // TODO change to a variable or not
    },
    "&[disabled][data-disabled]": {
      pointerEvents: "none",
      userSelect: "none",
    },
  },
});

globalStyle(`${StyledRadioItem}[data-disabled][disabled] ~ label`, {
  pointerEvents: "none",
  userSelect: "none",
});

export const StyledRadioIndicator = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  selectors: {
    "&::after": {
      content: '""',
      display: "block",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: themes.tokens.colors.background_canvas, // TODO change to a variable
    },
    "&[data-state=checked][data-disabled]::after": {
      background: "#525252", // TODO change to a variable
    },
  },
});

export const StyledRadioLabel = style({
  color: themes.tokens.colors.text_primary,
  fontWeight: FONT_VARIATIONS.MEDIUM,
  fontVariationSettings: `'wght' ${FONT_VARIATIONS.MEDIUM}`,
  fontSize: 15,
  lineHeight: "20px",
  userSelect: "none",
  paddingLeft: 15,
});
