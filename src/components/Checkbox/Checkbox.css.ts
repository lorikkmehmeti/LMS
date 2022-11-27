import { themes } from "../../styles/theme";
import { globalStyle, style } from "@vanilla-extract/css";
import { createShade } from "../../styles/utilities/utility-functions";
import { cssVar, transparentize } from "polished";
import { vars } from "../../styles/utilities/variables.css";

const vr = () => {
  console.log(
    themes.tokens.colors.primary["500"].toString().replace("var", "")
  );
};

export const StyledCheckbox = style({
  all: "unset",
  background: themes.tokens.colors.background_surface,
  border: "none",
  boxShadow: `0 0 0 1px ${themes.tokens.colors.border_dark}`,
  width: 20,
  height: 20,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  selectors: {
    "&:not([disabled])[data-state=checked]": {
      background: themes.tokens.colors.primary["500"],
      color: "#fff" || themes.tokens.colors.text_contrast,
      boxShadow: `0 0 0 1px ${themes.tokens.colors.primary["500"]}`,
    },
    "&:not(disabled):not(:focus):not([data-state=checked]):hover": {
      "@media": {
        "(hover)": {
          backgroundColor: themes.tokens.colors.background_medium,
        },
      },
    },
    "&:focus": {
      outline: `none`, // TODO replace with color
    },
  },
});

globalStyle(`${StyledCheckbox} > span`, {
  lineHeight: 0,
});
