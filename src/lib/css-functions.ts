/* ---------------------------------
  css-functions
--------------------------------- */

export function flex(
  $flow: string,
  $justify = "center",
  $align = "center"
): string {
  return `
  display: flex;
  flex-flow: ${$flow};
  justify-content: ${$justify};
  align-items: ${$align};
  `;
}

export function box($pad = 0, $mar = 0, $isList = false): string {
  return `
  padding: ${$pad};
  margin: ${$mar};
  ${$isList ? `list-style: none` : ""}
  `;
}

export function round(size: number): string {
  return `
    width: ${size + "px;"}
    height: ${size + "px;"}
    border-radius: 50%;
  `;
}

export function rem(target: number, context = 16): string {
  return target / context + "rem";
}
