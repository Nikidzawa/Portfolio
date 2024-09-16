import {makeAutoObservable} from "mobx";

class ImageWidgetController {

    isVisible = false;
    image = null;

    constructor() {
        makeAutoObservable(this);
    }

    closeWidget() {
        this.isVisible = false;
    }

    showWidget(image) {
        this.isVisible = true;
        this.image = image;
    }
}

export default new ImageWidgetController();