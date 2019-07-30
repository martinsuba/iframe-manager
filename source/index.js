import uuid from 'uuid/v4';

export default class iframeInjector {
  constructor() {
    this.iframes = new Map();
  }

  // parseStyle(styleObj) {

  // }

  // createElement({ src, id, style }) {
  //   const iframe = document.createElement('iframe');
  //   iframe.setAttribute('src', src);
  //   iframe.setAttribute('id', id);
  //   iframe.setAttribute('style', this.parseStyle(style));
  //   return iframe;
  // }

  inject({ src, style }) {
    const id = uuid();
    // const iframe = this.createElement({ id, src, style });
    // document.body.appendChild(iframe);
    // this.iframes.set(id, iframe);
    return id;
  }
}
