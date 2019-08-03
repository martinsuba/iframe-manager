# Iframe Manager

Iframe Manager is simple tool which allows you to create, inject, destroy and style iframes in the DOM. It's written in TypeScript and it works as npm package.

## Install
```
npm install https://github.com/martinsuba/iframe-manager.git
```

## Usage
```js
import IframeManager from 'iframe-manager';

const iframeManager = new IframeManager();

const style = {
  position: 'fixed',
  top: 0,
  left: 0,
};

const attributes = {
  class: 'iframe-css-class',
};

const target = 'body > div > .className';

// inject new iframe to the DOM
const injectedIframe = iframeManager.inject({
  source: 'https://www.github.com',
  style, // optional
  attributes, // optional
  target, // optional
});

// update iframe's style
injectedIframe.style({
  border: '5px solid red',
  backgroundColor: 'red',
});

// iframe HTMLElement is accessible under `element` property
injectedIframe.element.addEventListener('click', () => {});

// destroy injected iframe
injectedIframe.destroy();

// list of injected iframes is accessible under IframeManager's `iframes` property
iframeManager.iframes // returns Set object
```

## Methods
### IframeManager.inject(settings: Settings): Iframe
Injects iframe element to the DOM.
```ts
interface Settings {
  source: string;
  style?: object;
  attributes?: object;
  target?: string;
}
```
### Settings
Setting | Type | Description
------ | ---- | ----
source | string | Path to the iframe's content. Iframe's `src` attribute. Required.
style | object | Object with css style of the iframe in camel case. Not required.
attributes | object | Object with iframe's html attributes in camel case. Not required.
target | string | QuerySelector of an element to which should be iframe appended. Not required. By default iframe is appended to the body element.

### Iframe.style(style: object): void
Changes the style of the injected iframe.

### Iframe.destroy(): void
Removes injected iframe from the DOM.

## Properties
### IframeManager.iframes: Set
Set object of injected iframes.

### Iframe.element: HTMLElement
HTMLElement of injected iframe.
