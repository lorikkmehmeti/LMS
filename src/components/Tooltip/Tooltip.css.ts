import { keyframes, style } from "@vanilla-extract/css";
import { themes } from "../../styles/theme";
import {
  FONT_SIZE_PROPERTIES,
  SPACE_PROPERTIES,
} from "../../styles/theme/tokens";

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

export const StyledTooltipContent = style({
  maxWidth: "20rem",
  borderRadius: 4,
  paddingInline: SPACE_PROPERTIES[2],
  paddingBlock: SPACE_PROPERTIES[2],
  fontSize: FONT_SIZE_PROPERTIES[1],
  lineHeight: 1.2,
  color: themes.tokens.colors.text_primary,
  backgroundColor: themes.tokens.colors.background_light,
  boxShadow: `0 0 0 1px ${themes.tokens.colors.background_medium}`,
  userSelect: "none",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  selectors: {
    '&[data-state="delayed-open"][data-side="top"]': {
      animationName: slideDownAndFade,
    },
    '&[data-state="delayed-open"][data-side="right"]': {
      animationName: slideLeftAndFade,
    },
    '&[data-state="delayed-open"][data-side="bottom"]': {
      animationName: slideUpAndFade,
    },
    '&[data-state="delayed-open"][data-side="left"]': {
      animationName: slideRightAndFade,
    },
  },
});

export const StyledTooltipArrow = style({
  fill: themes.tokens.colors.background_light,
});
