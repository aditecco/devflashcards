/* ========================
style-vars
======================== */

// const palette = require("material-colors-object/index.json");

// layout
export const padding = "20px";
export const $_padding = "1.6rem";
export const margin = "20px";
export const $spacer = "20px";
export const $gutter = "$spacer";

// families
export const archivo = "'Archivo', sans-serif";
export const firaSans = "'Fira Sans', sans-serif";
export const workSans = "'Work Sans', sans-serif";
export const montserrat = "'Montserrat', sans-serif";
export const material = "'Material Icons'";
// "Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
export const baseFontStack =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

// styles
export const $fontPrimary = null;
export const $fontSecondary = null;
export const bodyFont = firaSans;
export const $titleFont = archivo;
export const $body = "16px";
export const $small = "$body * 0.9";
export const $xSmall = "$small - 2";
export const $title = "$body * 1.2";

// breakpoints
export const $XS = "320px";
export const $SM = "414px";
export const $MD = "768px";
export const $LG = "null";
export const $XL = "1268px";
export const $XXL = "null";

// UI
export const $appContent = "$headerHeight + $navbarHeight + 98 + 49;";
export const $bottomDrawerHeight = "100vh;";
export const $bottomDrawerPadding = "45vh;";
export const $cardInModalHeight = "470px;";
export const $cardInModalWidth = "370px;";
export const $cardMinWidth = "280px;";
export const $footerHeight = "20px;";
export const $headerHeight = "52px";
export const $navbarHeight = $headerHeight;
export const $pageHeaderHeight = "79px;";
export const $searchHeight = "72px;";
export const $wrapper = "780px";
export const $wrapperSm = "425px";
export const CARD_HEIGHT = "500px;";
export const CARD_WIDTH = "340px;";
export const CARD_MAX_WIDTH = "340px;";
export const CARD_RATIO =
  Number(CARD_WIDTH.match(/\d*/)) / Number(CARD_HEIGHT.match(/\d*/));
export const CARD_RADIUS = "10px";
export const mediaHeight = "400px;";

// FX
export const $border = "1px solid rgba($flat-gray-2, 0.5)";
export const $borderDark = "1px solid rgba($flat-gray-2, 0.8)";
export const $outline = "null";
export const radius = "4px";
export const $shadow = "0 2px 20px 6px rgba(black, 0.1)";
export const $lightShadow = "0 4px 4px rgba(0, 0, 0, 0.03)";
export const $innerShadow = "inset 0 -2px 10px rgba(black, 0.1)";
export const $textShadow = "0 2px 20px black";
export const $ligthTextShadow = "0 1px 1px rgba(black, 0.2)";

// colors
// export const accent = palette.purple.shades["700"].value;
// export const accentDark = palette.purple.shades["900"].value;
export const $backgroundMain = "$flat-gray-1";
export const $backgroundLight = "#eee";
export const $backgroundDark = "null";
export const transparent = "rgba(255, 255, 255, 0)";
export const $success = "$flat-green-1";
export const $error = "rgba($flat-red-1, 0.8)";
export const $paleYellow = "#fffae1e7";
export const $strokeLight = "$backgroundMain";
export const $darkGray = "#444";
export const $font = "#111";
export const fontAlt = "#444";
export const $fontLight = "$flat-gray-4";
export const hover = "";
