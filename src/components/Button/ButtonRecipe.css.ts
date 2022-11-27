import { recipe } from "@vanilla-extract/recipes";
import { themes } from "../../styles/theme";
import { FONT_VARIATIONS } from "../../styles/theme/tokens";

export const RButton = recipe({
  base: {
    appearance: "none",
    whiteSpace: "nowrap",
    borderRadius: 6,
    border: "none",
    fontWeight: `${FONT_VARIATIONS.NORMAL}`,
    fontVariationSettings: `'wght' ${FONT_VARIATIONS.NORMAL}`,
    position: "relative",
    transition: "background 150ms ease, color 150ms ease",
    lineHeight: 1,
    verticalAlign: "middle",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    ":focus-visible": {
      outline: `1px solid ${themes.tokens.colors.text_primary}`,
      outlineOffset: "1px",
      // boxShadow: `0 0 0 1px ${themes.tokens.colors.background_canvas}, 0 0 0 2px ${themes.tokens.colors.text_primary}`,
    },
    ":disabled": {
      cursor: "not-allowed",
      opacity: ".7",
    },
  },

  variants: {
    color: {
      primary: {
        background: themes.tokens.colors.primary[500],
        color: "#fff", // TODO create tokens that are similar and assign to theme contract (white, black)
        "@media": {
          "(hover)": {
            ":hover": {
              background: themes.tokens.colors.primary[600],
            },
          },
        },
        ":active": { background: themes.tokens.colors.primary[300] },
      },
      secondary: {
        background: themes.tokens.colors.secondary[500],
        color: "#000",
        fontWeight: `${FONT_VARIATIONS.MEDIUM}`,
        fontVariationSettings: `'wght' ${FONT_VARIATIONS.MEDIUM}`,
        "@media": {
          "(hover)": {
            ":hover": {
              background: themes.tokens.colors.secondary[600],
            },
          },
        },
        ":active": {
          background: themes.tokens.colors.secondary[300],
        },
      },
      ghost: {
        background: "transparent",
        color: themes.tokens.colors.text_primary,
        boxShadow: `0px 2px 4px rgba(0,0,0,.12)`,
        "@media": {
          "(hover)": {
            ":hover": {
              color: themes.tokens.colors.text_secondary,
            },
          },
        },
        ":active": {
          color: themes.tokens.colors.text_hint,
        },
      },
    },
    size: {
      small: { paddingInline: 12, height: 30, fontSize: 13 },
      medium: { paddingInline: 16, height: 36, fontSize: 14 },
      large: { paddingInline: 42, height: 42, fontSize: 16 },
    },
    rounded: {
      true: { borderRadius: 999 },
    },
    space: {
      inline: { marginInline: 10 },
      block: { marginBlock: 10 },
      top: { marginTop: 10 },
      bottom: { marginBottom: 10 },
      right: { marginRight: 10 },
      left: { marginLeft: 10 },
      none: { margin: 0 },
    },
  },

  defaultVariants: {
    color: "primary",
    size: "medium",
    space: "right",
  },
});
