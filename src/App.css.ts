import { globalFontFace, globalStyle, style } from "@vanilla-extract/css";
import { themes } from "./styles/theme";
import { vars } from "./styles/utilities/variables.css";

const inter = "Inter";
const Aspekta = "Aspekta Variable";

globalFontFace(inter, {
  src: 'url("/Inter.ttf")',
  fontDisplay: "swap",
});
globalFontFace(Aspekta, {
  src: 'url("/AspektaVF.woff2")',
  fontDisplay: "swap",
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  height: "100%",
  color: themes.tokens.colors.text_primary,
});
globalStyle("*, *::before, *::after", {
  margin: 0,
  boxSizing: "border-box",
  color: "currentColor",
});
globalStyle("*", { fontFamily: "Aspekta Variable" });

globalStyle("#root, .App, ._container", {
  height: "100%",
  color: themes.tokens.colors.text_primary,
});

// Background color for dark mode
globalStyle(".dark", {
  background: vars.bg.black,
  height: "100%",
});

// Background color
globalStyle("html", {
  background: vars.bg.white,
  height: "100%",
});

export const StyledToggle = style({
  all: "unset",
  backgroundColor: "white",
  color: "black",
  height: 20,
  width: 20,
  borderRadius: 4,
  display: "flex",
  fontSize: 15,
  lineHeight: 1,
  alignItems: "center",
  justifyContent: "center",
  selectors: {
    "&:hover": { backgroundColor: "violet" },
    "&[data-state=on]": {
      backgroundColor: "darkviolet",
      color: "black",
    },
    "&:focus": { boxShadow: `0 0 0 2px black` },
  },
});
