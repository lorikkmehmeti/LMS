import { style } from "@vanilla-extract/css";
import { StyledItem } from "./DropdownMenuStyles";
import { themes } from "../../styles/theme";

export const StyledSubTrigger = style([
  StyledItem["primary"],
  {
    selectors: {
      '&[data-state="open"]': {
        backgroundColor: themes.tokens.colors.background_light,
      },
    },
  },
]);

export const StyledSeparator = style({
  height: 1,
  backgroundColor: "rgba(0,0,0, .2)",
  margin: "2px 5px",
});

export const StyledItemIndicator = style({
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const RightSlotStyles = style({
  marginLeft: "auto",
  paddingLeft: 20,
  color: "mauve",
  selectors: {
    "[data-disabled] &": { color: "gray", opacity: 0.7, cursor: "not-allowed" },
  },
});
