declare module "pi-camera"{
  export interface config {
    mode: "photo" | "video";
    output?: string;
    width?: number;
    height?: number;
    timeout?: number;
    nopreview?: boolean;
    quality?: number;
  }
  export default class PiCamera {
    constructor(config: config);
    snap: () => Promise<string>;
  }
}
