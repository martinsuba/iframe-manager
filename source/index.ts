import { v4 } from 'uuid';

export default class IframeInjector {
  iframes: Map<string, HTMLElement>;

  constructor() {
    this.iframes = new Map();
  }

  parseStyle(styleObj: Object): string {
    return '';
  }

  createElement({ src, id, style }: { src: string, id: string, style: string }): HTMLElement {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', src);
    iframe.setAttribute('id', id);
    iframe.setAttribute('style', this.parseStyle(style));
    return iframe;
  }

  inject({ src, style }: { src: string, style: string }) {
    const id = v4();
    const iframe = this.createElement({ id, src, style });
    document.body.appendChild(iframe);
    this.iframes.set(id, iframe);
    return id;
  }
}
