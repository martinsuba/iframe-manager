import { expect } from 'chai';

import IframeInjector from '..';

describe('IframeInjector', () => {
  it('test run', () => {
    new IframeInjector();
    expect(1).to.be.equal(1);
  });
});
