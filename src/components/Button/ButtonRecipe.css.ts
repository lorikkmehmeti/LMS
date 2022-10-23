import { recipe } from "@vanilla-extract/recipes";
import { themes } from "../../styles/theme";
import { FONT_VARIATIONS } from "../../styles/theme/tokens";

export const RButton = recipe({
  base: {
    borderRadius: 6,
    border: "none",
    fontWeight: `${FONT_VARIATIONS.NORMAL}`,
    fontVariationSettings: `'wght' ${FONT_VARIATIONS.NORMAL}`,
    position: "relative",
    transition: "background 150ms ease, color 150ms ease",
    ":focus-visible": {
      boxShadow: `0 0 0 1px ${themes.tokens.colors.background}, 0 0 0 2px ${themes.tokens.colors.font.main}`,
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
        color: "#fff",
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
        color: themes.tokens.colors.font.main,
        "@media": {
          "(hover)": {
            ":hover": {
              color: themes.tokens.colors.font.alpha70,
            },
          },
        },
        ":active": {
          color: themes.tokens.colors.font.alpha70,
        },
      },
    },
    size: {
      small: { paddingInline: 12, height: 30 },
      medium: { paddingInline: 16, height: 36 },
      large: { paddingInline: 42, height: 42 },
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
