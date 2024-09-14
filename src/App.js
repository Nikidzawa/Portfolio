import {Navigate, Route, Routes} from "react-router-dom"
import HomePage from "./pages/main/HomePage";
import {useEffect} from "react";
import {createGlobalStyle} from "styled-components";
import themeController from "../src/store/ThemeController"
import languageController from "./store/LanguageController";
import {observer} from "mobx-react-lite";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.themeIsDark === true ? "black" : "white"};
        color: ${props => props.themeIsDark === true ? "white" : "black"};
        transition: background-color 0.5s ease, color 0.5s ease;
    }
`;

const App = observer(() => {
    useEffect(() => {
        const language = localStorage.getItem("language") || "ru";
        languageController.setLanguage(language)

        const theme = localStorage.getItem("theme") || "dark";
        themeController.setTheme(theme)
    }, []);

    return (
        <>
            <GlobalStyle themeIsDark={themeController.themeIsDark()}/>
            <Routes>
                <Route path={"/home"} element={<HomePage/>}></Route>
                <Route path={"/"} element={<Navigate to="/home"/>}></Route>
            </Routes>
        </>
    );
})

export default App;
