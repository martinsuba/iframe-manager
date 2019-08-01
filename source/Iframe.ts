import { parseStyle } from './helpers';

export default class Iframe {
  private element: HTMLElement;
  private deleteFromList: Function;

  constructor(element: HTMLElement, deleteFromList: Function) {
    this.element = element;
    this.deleteFromList = deleteFromList;
  }

  style(style: object): void {
    if (!style && (typeof style !== 'object' || Array.isArray(style))) {
      throw new Error(`Style is expected to be an object, but got ${typeof style}`);
    }
    if (!document.body.contains(this.element)) {
      throw new Error('Iframe element is not in the dom.');
    }

    this.element.setAttribute('style', parseStyle(style));
  }

  destroy(): void {
    if (!document.body.contains(this.element)) {
      throw new Error('Iframe element is not in the dom.');
    }

    this.element.parentNode.removeChild(this.element);
    this.deleteFromList(this);
  }
}
