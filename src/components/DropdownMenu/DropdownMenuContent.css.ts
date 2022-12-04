import { keyframes, style } from "@vanilla-extract/css";
import { themes } from "../../styles/theme";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const StyledContent = style({
  zIndex: 333,
  minWidth: 220,
  maxHeight: 400,
  overflowY: "auto",
  backgroundColor: themes.tokens.colors.background_canvas,
  borderRadius: 6,
  padding: 5,
  border: `1px solid ${themes.tokens.colors.border_dark}`,
  boxShadow: `rgb(0 0 0 / 9%) 0px 3px 12px`,
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      animationDuration: "400ms",
      animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      willChange: "transform, opacity",
      selectors: {
        '&[data-state="open"][data-side="top"]': {
          animationName: slideDownAndFade,
        },
        '&[data-state="open"][data-side="right"]': {
          animationName: slideLeftAndFade,
        },
        '&[data-state="open"][data-side="bottom"]': {
          animationName: slideUpAndFade,
        },
        '&[data-state="open"][data-side="left"]': {
          animationName: slideRightAndFade,
        },
      },
      "::-webkit-scrollbar": {
        backgroundColor: "transparent",
        width: 8,
      },
      "::-webkit-scrollbar-thumb": {
        background: "#c2c2ca",
        borderRadius: 10,
        transition: "all 400ms ease",
      },
    },
  },
});
