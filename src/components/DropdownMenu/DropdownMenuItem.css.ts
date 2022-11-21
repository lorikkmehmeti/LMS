import { style, styleVariants } from "@vanilla-extract/css";
import { themes } from "../../styles/theme";

export const StyledItemBase = style({
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: themes.tokens.colors.text_primary,
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 30,
  padding: "0 5px",
  position: "relative",
  paddingLeft: 25,
  userSelect: "none",
});

export const StyledItem = styleVariants({
  primary: [
    StyledItemBase,
    {
      selectors: {
        "&[data-disabled]": {
          pointerEvents: "none",
          color: "gray",
          opacity: 0.7,
          cursor: "not-allowed",
        },

        "&[data-highlighted]": {
          backgroundColor: themes.tokens.colors.background_light,
        },
      },
    },
  ],
  label: [StyledItemBase],
});
