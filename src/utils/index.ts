/* ---------------------------------
utils
--------------------------------- */

export function truncate(s: string, cap = 18): string | undefined {
  if (!s) return;

  return s.length > 20 ? s.substr(0, cap) + "…" : s;
}

export function basicSanitizer(html: string): string | undefined {
  if (!html) return;

  const patterns = {
    "empty tags": /<([a-z]+)><\/\1>/g,
  };

  return html.replace(patterns["empty tags"], "");
}
