import {Navigate, Route, Routes} from "react-router-dom"
import FooterSection from "./sections/footer/FooterSection";
import HomePage from "./pages/main/HomePage";
import {useEffect, useState} from "react";

function App() {
    const [language, setLanguage] = useState("");

    useEffect(() => {
        const language = localStorage.getItem("language") || "ru";
        setLanguage(language)
    }, [])

    useEffect(() => {
        localStorage.setItem("language", language)
    }, [language]);

  return (
      language &&
      <div>
          <Routes>
              <Route path={"/home"} element={<HomePage setLanguage={setLanguage} language={language}/>}></Route>
              <Route path={"/"} element={<Navigate to="/home"/>}></Route>
          </Routes>
          <FooterSection/>
      </div>
  );
}


export default App;
