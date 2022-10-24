import { style, styleVariants } from "@vanilla-extract/css";

export const StyledItemBase = style({
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: "black",
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
          backgroundColor: "rgba(0,0,0, .1)",
          color: "black",
        },
      },
    },
  ],
  label: [StyledItemBase],
});