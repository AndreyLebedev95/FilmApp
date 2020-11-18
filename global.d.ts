declare module '*.scss' {
    const content: {
        [className: string]: string
    };
    export = content;
}
declare var __PUBLIC_PATH__: string;