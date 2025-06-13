export function extractLinks(text: string): string[] {
  const regex = /https?:\/\/[^\s"'<>]+/gi;
  return text.match(regex) || [];
}
