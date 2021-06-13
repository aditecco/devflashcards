/* ---------------------------------
utils
--------------------------------- */

export function truncate(s: string): string | undefined {
  if (!s) return;

  return s.length > 20 ? s.substr(0, 18) + "…" : s;
}
