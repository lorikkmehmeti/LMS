import { recipe } from "@vanilla-extract/recipes";
import { ellipsis, lighten, opacify, tint, transparentize } from "polished";
import {
  FONT_SIZE_PROPERTIES,
  FONT_VARIATIONS,
  SPACE_PROPERTIES,
} from "../../styles/theme/tokens";
import { globalStyle, style } from "@vanilla-extract/css";
import { themes } from "../../styles/theme";

export const BadgeText = style({
  appearance: "none",
  whiteSpace: "nowrap",
  maxWidth: "20rem",
  ...ellipsis("20rem"),
  textDecoration: "none",
});

export const BadgeIcon = style({
  width: "auto",
  display: "inline-flex",
  marginRight: 5,
});

export const BadgeImageWrapper = recipe({
  base: {
    height: 28,
    background: themes.tokens.colors.background_medium,
    display: "inline-flex",
    marginRight: 5,
    borderRadius: 999,
  },
  variants: {
    size: {
      small: {
        width: 24,
        height: 24,
        fontSize: FONT_SIZE_PROPERTIES[0],
      },
      medium: {
        width: 32,
        height: 32,
        fontSize: FONT_SIZE_PROPERTIES[1],
      },
    },
  },

  defaultVariants: {
    size: "small",
  },
});

export const BadgeImage = style({
  maxWidth: "100%",
  borderRadius: 999,
});

globalStyle(`${BadgeIcon} > svg`, {
  height: 15,
  width: "auto",
});

export const BadgeRecipe = recipe({
  base: {
    appearance: "none",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    height: 32,
    fontSize: FONT_SIZE_PROPERTIES[1],
    fontWeight: FONT_VARIATIONS.MEDIUM,
    fontVariationSettings: `'wght' ${FONT_VARIATIONS.MEDIUM}`,
    lineHeight: FONT_SIZE_PROPERTIES[3],
    borderRadius: 6,
    border: "none",
    paddingInline: SPACE_PROPERTIES[3],
    marginRight: SPACE_PROPERTIES[2],
    marginBottom: SPACE_PROPERTIES[2],
    userSelect: "none",
    background: themes.tokens.colors.background_light,
    boxShadow: `0 0 0 1px ${themes.tokens.colors.background_medium}`,
    position: "relative",
    ":focus-visible": {
      outline: `1px solid ${themes.tokens.colors.primary[500]}`,
    },
  },

  variants: {
    color: {
      success: {
        color: themes.tokens.colors.success,
      },
      error: {
        color: themes.tokens.colors.error,
      },
      warning: {
        color: themes.tokens.colors.warning,
      },
      info: {
        color: themes.tokens.colors.info,
      },
    },
    size: {
      small: {
        height: 26,
        fontSize: FONT_SIZE_PROPERTIES[0],
      },
      medium: {
        height: 28,
        fontSize: FONT_SIZE_PROPERTIES[0],
      },
    },
  },

  defaultVariants: {
    size: "small",
  },
});
