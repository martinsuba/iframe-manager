import { expect } from 'chai';
import sinon from 'sinon';

import Iframe from '../Iframe';
import IframeManager from '../IframeManager';

let deleteSpy: sinon.SinonSpy;
let iframe: Iframe;
const elementMock = document.createElement('iframe');

describe('Iframe', () => {
  beforeEach(() => {
    deleteSpy = sinon.spy();
    iframe = new Iframe(elementMock, deleteSpy);
    if (!document.body.contains(elementMock)) {
      document.body.appendChild(elementMock);
    }
  });

  it('should create an instance of Iframe', () => {
    expect(iframe.element).to.equal(elementMock);
    expect((iframe as any).deleteFromList).to.be.a('function');
  });

  it('should style an iframe element', () => {
    const style = {
      background: 'red',
      position: 'fixed',
    };

    iframe.style(style);

    expect(iframe.element.style.background).to.equal(style.background);
    expect(iframe.element.style.position).to.equal(style.position);
  });

  it('should throw when undefined or invalid style argument', () => {
    const invalidStyle = [];

    expect(() => (iframe as any).style()).to.throw(Error);
    expect(() => (iframe as any).style(invalidStyle)).to.throw(Error);
  });

  it('should destroy iframe element', () => {
    iframe.destroy();

    expect(document.body.contains(elementMock)).to.be.false;
    expect(deleteSpy.calledOnceWith(iframe)).to.be.true;
  });

  it('should throw when element  is not in the DOM.', () => {
    elementMock.parentNode.removeChild(elementMock);

    expect(() => (iframe as any).style({})).to.throw(Error);
    expect(() => iframe.destroy()).to.throw(Error);
  });
});
