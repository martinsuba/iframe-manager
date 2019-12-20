import Iframe from './Iframe';
import { parseStyle, camelToKebab } from './helpers';

interface Settings {
  source: string;
  style?: object;
  attributes?: object;
  target?: string;
}

export default class IframeManager {
  iframes: Set<Iframe>;

  constructor() {
    this.iframes = new Set();
  }

  private createElement({ source, style, attributes = {} }: { source: string, style?: object, attributes?: object }): HTMLElement {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', source);
    iframe.setAttribute('style', parseStyle(style));
    for (const [key, value] of Object.entries(attributes)) {
      iframe.setAttribute(camelToKebab(key), value);
    }

    return iframe;
  }

  deleteFromList(iframe: Iframe): void {
    this.iframes.delete(iframe);
  }

  inject({
    source, style, attributes, target,
  }: Settings): Iframe {
    if (!source || typeof source !== 'string') {
      throw new Error(`Source property is expected to be a string, but got ${typeof source}`);
    }
    if (style && (typeof style !== 'object' || Array.isArray(style))) {
      throw new Error(`Style property is expected to be an object, but got ${typeof style}`);
    }
    if (attributes && (typeof attributes !== 'object' || Array.isArray(attributes))) {
      throw new Error(`Attributes property is expected to be an object, but got ${typeof attributes}`);
    }
    if (target && typeof target !== 'string') {
      throw new Error(`Target property is expected to be a string, but got ${typeof target}`);
    }

    const iframeElement = this.createElement({ source, style, attributes });
    const targetElement = target ? document.querySelector(target) : document.body;

    if (targetElement == null) {
      throw new Error('Cannot find target element in the DOM.');
    }

    targetElement.appendChild(iframeElement);
    const iframe = new Iframe(iframeElement, this.deleteFromList.bind(this));
    this.iframes.add(iframe);
    return iframe;
  }
}
