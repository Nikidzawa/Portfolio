import {makeAutoObservable} from "mobx";

class ThemeController {

    currentTheme = "dark"

    constructor() {
        makeAutoObservable(this);
    }

    changeTheme() {
        const newTheme = this.currentTheme === "dark" ? "light" : "dark";
        this.currentTheme = newTheme;
        localStorage.setItem("theme", newTheme)
    }

    setTheme(theme) {
        this.currentTheme = theme;
    }

    themeIsDark() {
        return this.currentTheme === "dark";
    }

}

export default new ThemeController();