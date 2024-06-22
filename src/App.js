import {Navigate, Route, Routes} from "react-router-dom"
import FooterSection from "./sections/footer/FooterSection";
import HomePage from "./pages/main/HomePage";
import {useEffect, useState} from "react";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
      background-color: ${props => props.theme === "dark" ? "black" : "white"};
      color: ${props => props.theme === "dark" ? "white" : "black"};
  }
`;

function App() {
    const [language, setLanguage] = useState("");
    const [theme, setTheme] = useState("");

    useEffect(() => {
        const language = localStorage.getItem("language") || "ru";
        setLanguage(language)

        const theme = localStorage.getItem("theme") || "dark";
        setTheme(theme)
    }, []);

    useEffect(() => {
        localStorage.setItem("language", language)
    }, [language]);

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme]);

  return (
      language && theme &&
      <>
          <GlobalStyle theme={theme}/>
          <Routes>
              <Route path={"/home"} element={<HomePage setLanguage={setLanguage}
                                                       language={language}
                                                       theme={theme}
                                                       setTheme={setTheme}
              />}
              ></Route>
              <Route path={"/"} element={<Navigate to="/home"/>}></Route>
          </Routes>
          <FooterSection theme={theme}/>
      </>
  );
}


export default App;
