import styled from "styled-components";
import languageController from "../../../../store/LanguageController";
import React, {useEffect} from "react";


const LanguageCode = styled.div`
    font-size: 38px;
    font-weight: bold;
    text-align: center;

    @media screen and (max-width: 500px) {
        font-size: 27px;
    }
`

export default function LanguageSwitcher() {
    const handleKeyDown = (event) => {
        if (event.key === "F2") {
            event.preventDefault();
            languageController.changeLanguage();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <LanguageCode title={"F2"}
                      onClick={() => languageController.changeLanguage()}>
            {languageController.getCurrentLanguageCode()}
        </LanguageCode>
    )
}