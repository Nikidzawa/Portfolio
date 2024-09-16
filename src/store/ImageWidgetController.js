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
        this.isVisible = true;
        this.images = images;
    }
}

export default new ImageWidgetController();