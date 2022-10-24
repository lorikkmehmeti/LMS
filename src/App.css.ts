import { globalFontFace, globalStyle, style } from "@vanilla-extract/css";
import { themes } from "./styles/theme";

const inter = "Inter";

globalFontFace(inter, {
  src: 'url("/Inter.ttf")',
  fontDisplay: "swap",
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  height: "100%",
  color: themes.tokens.colors.text,
});
globalStyle("*, *::before, *::after", {
  margin: 0,
  boxSizing: "border-box",
  color: "currentColor",
});
globalStyle("*", { fontFamily: "Inter" });
globalStyle("#root, .App, ._container", {
  height: "100%",
  color: themes.tokens.colors.text,
});
globalStyle(".App, body, html, #root, ._container", {
  background: themes.tokens.colors.background,
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
