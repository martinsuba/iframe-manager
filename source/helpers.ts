export function camelToKebab(string: string): string {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

export function parseStyle(style: Record<string, string>): string {
  if (!style) {
    return '';
  }

  const rule = Object.keys(style).map(property => `${camelToKebab(property)}: ${style[property]};`);
  return rule.join('\n');
}
