const COLORS_THEME_PROVIDER = {
  "negative-normal": "#E30000",
  "negative-light": "#FFE5E5",
  "notice-normal": "#FF9530",
  "positive-normal": "00B955",
} as object;

const COLORS_GLOBAL_STYLE = `
    --color-negative-normal: #E30000;
    --color-negative-light: #FFE5E5;
    --color-notice-normal: #FF9530;
    --color-notice-light: #FFF1E3;
    --color-positive-normal: #00B955;
    --color-positive-light: #E5FFED;
  ` as string;

export { COLORS_THEME_PROVIDER, COLORS_GLOBAL_STYLE };
