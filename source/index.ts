import { v4 } from 'uuid';

interface Settings {
  source: string;
  style?: object;
  attributes?: object;
  target?: string;
}

class IframeManager {
  iframes: Map<string, HTMLElement>;

  constructor() {
    this.iframes = new Map();
  }

  private getIframe(id: string): HTMLElement {
    if (!id || typeof id !== 'string') {
      throw new Error(`ID is expected to be a string, but got ${typeof id}`);
    }

    const iframe = this.iframes.get(id);
    if (iframe == null) {
      throw new Error('Unknown iframe ID.');
    }
    if (!document.body.contains(iframe)) {
      throw new Error('Iframe element is not in the dom.');
    }

    return iframe;
  }

  private parseStyle(style: Object): string {
    function camelToKebab(string: string): string {
      return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    }

    if (!style) {
      return '';
    }

    const rule = Object.keys(style).map(property => `${camelToKebab(property)}: ${style[property]};`);
    return rule.join('\n');
  }

  private createElement({ source, id, style, attributes = {} }: { source: string, id: string, style?: object, attributes?: object }): HTMLElement {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', source);
    iframe.setAttribute('id', id);
    iframe.setAttribute('style', this.parseStyle(style));
    for (const attr in attributes) {
      iframe.setAttribute(attr, attributes[attr]);
    }
    return iframe;
  }

  style(id: string, style?: object): void {
    if (style && (typeof style !== 'object' || Array.isArray(style))) {
      throw new Error(`Style is expected to be an object, but got ${typeof style}`);
    }

    const iframe = this.getIframe(id);

    iframe.setAttribute('style', this.parseStyle(style));
  }

  destroy(id: string): void {
    const iframe = this.getIframe(id);
    iframe.parentNode.removeChild(iframe);
    this.iframes.delete(id);
  }

  inject({ source, style, attributes, target }: Settings) {
    if (!source || typeof source !== 'string') {
      throw new Error(`Source property is expected to be a string, but got ${typeof source}`);
    }
    if (style && (typeof style !== 'object' || Array.isArray(style))) {
      throw new Error(`Style property is expected to be an object, but got ${typeof style}`);
    }
    if (attributes && typeof attributes !== 'object' || Array.isArray(attributes)) {
      throw new Error(`Attributes property is expected to be an object, but got ${typeof attributes}`);
    }
    if (target && typeof target !== 'string') {
      throw new Error(`Target property is expected to be a string, but got ${typeof target}`);
    }

    const id = v4();
    const iframe = this.createElement({ id, source, style, attributes });
    const targetElement = target ? document.querySelector(target) : document.body;

    if (targetElement == null) {
      throw new Error('Cannot find target element in the DOM.');
    }

    targetElement.appendChild(iframe);
    this.iframes.set(id, iframe);
    return id;
  }
}

export default new IframeManager();
