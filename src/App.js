import {Navigate, Route, Routes} from "react-router-dom"
import HomePage from "./pages/main/HomePage";
import {useEffect, useState} from "react";
import {createGlobalStyle} from "styled-components";
import themeController from "../src/store/ThemeController"
import {observer} from "mobx-react-lite";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme === "dark" ? "black" : "white"};
        color: ${props => props.theme === "dark" ? "white" : "black"};
        transition: background-color 0.5s ease, color 0.5s ease;
    }
`;

const App = observer(() => {
    const [language, setLanguage] = useState("");

    useEffect(() => {
        const language = localStorage.getItem("language") || "ru";
        setLanguage(language)

        const theme = localStorage.getItem("theme") || "dark";
        themeController.setTheme(theme)
    }, []);

    useEffect(() => {
        localStorage.setItem("language", language)
    }, [language]);

    return (
        language &&
        <>
            <GlobalStyle theme={themeController.currentTheme}/>
            <Routes>
                <Route path={"/home"} element={
                    <HomePage setLanguage={setLanguage}
                              language={language}
                    />
                }
                ></Route>
                <Route path={"/"} element={<Navigate to="/home"/>}></Route>
            </Routes>
        </>
    );
})

export default App;
