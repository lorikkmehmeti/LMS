import { globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import {
  FONT_SIZE_PROPERTIES,
  FONT_VARIATIONS,
} from "../../../styles/theme/tokens";

globalStyle("h1,h2,h3,h4,h5,h6", { lineHeight: "1.5" });

export const RText = recipe({
  base: {
    whiteSpace: "nowrap",
    wordBreak: "break-word",
  },
  variants: {
    type: {
      h1: {
        // color: "blue",
        fontSize: FONT_SIZE_PROPERTIES["6"],
        fontWeight: FONT_VARIATIONS.BOLD,
        fontVariationSettings: `'wght' ${FONT_VARIATIONS.BOLD}`,
      },
      h2: {
        // color: "red",
        fontSize: FONT_SIZE_PROPERTIES["5"],
        fontWeight: FONT_VARIATIONS.BOLD,
        fontVariationSettings: `'wght' ${FONT_VARIATIONS.BOLD}`,
      },
      h3: {
        // color: "yellow",
        fontSize: FONT_SIZE_PROPERTIES["4"],
        fontWeight: FONT_VARIATIONS.MEDIUM,
        fontVariationSettings: `'wght' ${FONT_VARIATIONS.MEDIUM}`,
      },
      h4: {
        // color: "green",
        fontSize: FONT_SIZE_PROPERTIES["3"],
        fontWeight: FONT_VARIATIONS.MEDIUM,
        fontVariationSettings: `'wght' ${FONT_VARIATIONS.MEDIUM}`,
      },
      h5: {
        // color: "hotpink",
        fontSize: FONT_SIZE_PROPERTIES["2"],
        fontWeight: FONT_VARIATIONS.MEDIUM,
        fontVariationSettings: `'wght' ${FONT_VARIATIONS.MEDIUM}`,
      },
      h6: {
        // color: "aliceblue",
        fontSize: FONT_SIZE_PROPERTIES["1"],
        fontWeight: FONT_VARIATIONS.MEDIUM,
        fontVariationSettings: `'wght' ${FONT_VARIATIONS.MEDIUM}`,
      },
      title: {},
      section: {},
    },
  },
});
