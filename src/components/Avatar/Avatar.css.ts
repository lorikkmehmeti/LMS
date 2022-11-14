import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { FONT_VARIATIONS } from "../../styles/theme/tokens";

const Size = createVar();

const StyledRoot = style({
  vars: {
    [Size]: "12px",
  },
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  userSelect: "none",
  borderRadius: "100%",
  width: calc(Size).multiply("4px").toString(),
  height: calc(Size).multiply("4px").toString(),
  background: "#8fabb5",
  position: "relative",
});

const StyledImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "100%",
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
  lineHeight: 1.5,
  fontWeight: FONT_VARIATIONS.MEDIUM,
  fontVariationSettings: `'wght' ${FONT_VARIATIONS.BOLD}`,
  borderRadius: "100%",
});

export { StyledRoot, StyledImage, StyledFallback, Size };
