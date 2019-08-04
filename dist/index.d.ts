declare module "helpers" {
    export function camelToKebab(string: string): string;
    export function parseStyle(style: Object): string;
}
declare module "iframe" {
    export default class Iframe {
        element: HTMLElement;
        private deleteFromList;
        constructor(element: HTMLElement, deleteFromList: Function);
        style(style: object): void;
        destroy(): void;
    }
}
declare module "iframe-manager" {
    import Iframe from "iframe";
    interface Settings {
        source: string;
        style?: object;
        attributes?: object;
        target?: string;
    }
    export default class IframeManager {
        iframes: Set<Iframe>;
        constructor();
        private createElement;
        deleteFromList(iframe: Iframe): void;
        inject({ source, style, attributes, target, }: Settings): Iframe;
    }
}
