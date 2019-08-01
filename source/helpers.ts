export function parseStyle(style: Object): string {
  function camelToKebab(string: string): string {
    return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
  }

  if (!style) {
    return '';
  }

  const rule = Object.keys(style).map(property => `${camelToKebab(property)}: ${style[property]};`);
  return rule.join('\n');
}
