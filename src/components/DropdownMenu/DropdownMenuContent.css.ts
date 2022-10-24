import { keyframes, style } from "@vanilla-extract/css";

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
  minWidth: 220,
  maxHeight: 400,
  overflowY: "auto",
  backgroundColor: "white",
  borderRadius: 6,
  padding: 5,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
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
