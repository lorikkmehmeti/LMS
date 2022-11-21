import { themes } from "../../styles/theme";
import { globalStyle, style } from "@vanilla-extract/css";

export const StyledCheckbox = style({
  all: "unset",
  background: themes.tokens.colors.background_medium,
  border: `1px solid ${themes.tokens.colors.border_dark}`,
  width: 20,
  height: 20,
  borderRadius: 6,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  selectors: {
    "&:not([disabled])[data-state=checked]": {
      background: themes.tokens.colors.primary["500"],
      color: "#fff" || themes.tokens.colors.text_contrast,
      borderColor: themes.tokens.colors.primary["500"],
    },
    "&:hover": { backgroundColor: themes.tokens.colors.background_medium },
    "&:focus": { outline: "none" },
  },
});

globalStyle(`${StyledCheckbox} > span`, {
  lineHeight: 0,
});
