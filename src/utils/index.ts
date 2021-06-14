/* ---------------------------------
utils
--------------------------------- */

export function truncate(s: string): string | undefined {
  if (!s) return;

  return s.length > 20 ? s.substr(0, 18) + "…" : s;
}

export function basicSanitizer(html: string): string | undefined {
  if (!html) return;

  const patterns = {
    "empty tags": /<([a-z]+)><\/\1>/g,
  };

  return html.replace(patterns["empty tags"], "");
}
