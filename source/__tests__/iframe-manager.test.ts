import { expect } from 'chai';

import IframeManager from '../iframe-manager';
import Iframe from '../iframe';

describe('IframeManager', () => {
  it('should create an instance of IframeManager', () => {
    const iframeManager = new IframeManager();

    expect(iframeManager.iframes).to.deep.equal(new Set());
  });

  it('should inject iframe html element', () => {
    const iframeManager = new IframeManager();
    const settings = {
      source: 'some/source/path.html',
      style: {
        background: 'red',
        position: 'fixed',
      },
      attributes: {
        class: 'someClass',
      },
      target: 'body',
    };

    const injectedIframe = iframeManager.inject(settings);
    const injectedElement = injectedIframe.element;

    expect(document.body.contains(injectedElement)).to.be.true;
    expect(injectedElement.getAttribute('class')).to.be.equal(settings.attributes.class);
    expect(injectedElement.getAttribute('src')).to.be.equal(settings.source);
    expect(injectedElement.style.background).to.be.equal(settings.style.background);
    expect(injectedElement.style.position).to.be.equal(settings.style.position);
    expect(injectedElement.parentElement).to.be.equal(document.querySelector(settings.target));
    expect(injectedIframe).to.be.an.instanceof(Iframe);
    expect(iframeManager.iframes.has(injectedIframe)).to.be.true;
  });

  it('should throw when invalid setting', () => {
    const iframeManager = new IframeManager();
    const invalidSettings = [
      {},
      {
        source: 'abc',
        style: 'background: red',
      },
      {
        source: 'abc',
        style: { background: 'red' },
        attributes: 'invalid',
      },
      {
        source: 'abc',
        style: { background: 'red' },
        attributes: { class: 'someClass' },
        target: ['body'],
      },
    ];

    // @ts-ignore
    invalidSettings.forEach(settings => expect(() => iframeManager.inject(settings)).to.throw(Error));
  });

  it('should throw when target element is not in the DOM', () => {
    const iframeManager = new IframeManager();
    const settings = {
      source: 'abc',
      style: { background: 'red' },
      attributes: { class: 'someClass' },
      target: '#someNonExistentId',
    };

    expect(() => iframeManager.inject(settings)).to.throw(Error);
  });

  it('should delete iframe from the list', () => {
    const iframeManager = new IframeManager();
    const settings = { source: 'some/source/path.html' };

    const iframe = iframeManager.inject(settings);
    iframeManager.deleteFromList(iframe);

    expect(iframeManager.iframes.has(iframe)).to.be.false;
  });
});
