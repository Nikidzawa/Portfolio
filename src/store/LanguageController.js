import {makeAutoObservable} from "mobx";
import LanguageData from "../data/LanguageData";

class LanguageController {
    currentLanguage = "ru";

    constructor() {
        makeAutoObservable(this);
    }

    changeLanguage() {
        const newLanguage = this.currentLanguage === "ru" ? "en" : "ru"
        this.currentLanguage = newLanguage;
        localStorage.setItem("language", newLanguage);
    }

    setLanguage(language) {
        this.currentLanguage = language;
    }

    getCurrentLanguageCode() {
        switch (this.currentLanguage) {
            case "en":
                return "EN";
            case "ru":
                return "RU";
            default:
                return "RU"
        }
    }

    getTranslation(section) {
        switch (section) {
            case "starter":
                return LanguageData.getStarterSectionWords(this.currentLanguage);
            case "bestPetProject":
                return LanguageData.getBestProjectSectionWords(this.currentLanguage);
            case "bestFreelanceProject":
                return LanguageData.getBestFreelancerSectionWords(this.currentLanguage);
            case "skillsSection":
                return LanguageData.getSkillSectionWords(this.currentLanguage);
            case "contactSection":
                return LanguageData.getContactSectionWords(this.currentLanguage);
            default:
                break;
        }
    }
}

export default new LanguageController();
