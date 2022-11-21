import { globalStyle, style } from "@vanilla-extract/css";
import { themes } from "../../styles/theme";

export const StyledRadioItem = style({
  all: "unset",
  background: themes.tokens.colors.background_surface,
  width: 20,
  height: 20,
  borderRadius: "100%",
  border: `1px solid ${themes.tokens.colors.border_dark}`,
  transition: "background 150ms ease",
  zIndex: 2,
  position: "relative",
  selectors: {
    "&:not(disabled):not([data-state=checked]):hover": {
      background: themes.tokens.colors.background_medium,
    },
    "&:focus-visible": { boxShadow: `0 0 0 2px #2C2C2E` },
    "&:not([disabled])[data-state=checked]": {
      background: themes.tokens.colors.primary[500],
      boxShadow: `none`,
      borderColor: themes.tokens.colors.primary[500],
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
      backgroundColor: "#FAFAFA", // TODO change to a variable
    },
    "&[data-state=checked][data-disabled]::after": {
      background: "#525252", // TODO change to a variable
    },
  },
});

export const StyledRadioLabel = style({
  color: themes.tokens.colors.text_primary,
  fontSize: 15,
  lineHeight: 1.5,
  userSelect: "none",
  paddingLeft: 15,
});
