import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { calc } from "@vanilla-extract/css-utils";
import { FONT_VARIATIONS } from "../../styles/theme/tokens";

// const StyledRootRecipe = recipe({
//   base: {
//     display: "inline-flex",
//     alignItems: "center",
//     justifyContent: "center",
//     verticalAlign: "middle",
//     overflow: "hidden",
//     userSelect: "none",
//     borderRadius: "100%",
//     width: 32,
//     height: 32,
//   },
//
//   variants: {
//     size: {
//       small: { width: 32, height: 32 },
//       default: { width: 48, height: 48 },
//       medium: { width: 64, height: 64 },
//       large: { width: 128, height: 128 },
//     },
//   },
//
//   defaultVariants: {
//     size: "default",
//   },
// });

const Size = createVar();

const StyledRoot = style({
  vars: {
    [Size]: "12px",
  },
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  borderRadius: "100%",
  width: calc(Size).multiply("4px").toString(),
  height: calc(Size).multiply("4px").toString(),
  background: "#8fabb5",
});

const StyledImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
  boxShadow: "0 0 0 1px inset rgba(255,255,255, .1)",
});

const StyledFallback = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#a9fba0",
  color: "BLACK",
  fontSize: calc(Size).multiply("4px").divide(2.5).toString(),
  lineHeight: 1,
  fontWeight: FONT_VARIATIONS.BOLD,
  fontVariationSettings: `'wght' ${FONT_VARIATIONS.BOLD}`,
});

export { StyledRoot, StyledImage, StyledFallback, Size };
