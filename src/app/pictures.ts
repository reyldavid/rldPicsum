export class Picture {
    id: number;
    width: number;
    height: number;
    grayscale: boolean;
    blur: boolean;
    blurSetting: number;

    constructor() {
        this.id = null;
        this.width = null;
        this.height = null;
        this.grayscale = false;
        this.blur = false;
        this.blurSetting = null;
    }
}