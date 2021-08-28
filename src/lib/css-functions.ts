/* ---------------------------------
  css-functions
--------------------------------- */

type FlexOptions = { flow?: string; justify?: string; align?: string };

export function flex(options?: FlexOptions): string {
  const { flow, justify, align } = options ?? {};

  return `
  display: flex;
  flex-flow: ${flow || "row nowrap"};
  justify-content: ${justify || "center"};
  align-items: ${align || "center"};
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
