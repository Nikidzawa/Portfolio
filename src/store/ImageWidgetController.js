import {makeAutoObservable} from "mobx";

class ImageWidgetController {

    isVisible = false;
    images = [];

    constructor() {
        makeAutoObservable(this);
    }

    closeWidget() {
        this.isVisible = false;
    }

    showWidget(images) {
        this.images = images;
        this.isVisible = true;
    }
}

export default new ImageWidgetController();