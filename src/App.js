import HeaderSection from "./sections/HeaderSection";
import {Navigate, Route, Routes} from "react-router-dom"
import FooterSection from "./sections/footer/FooterSection";
import ProjectsPage from "./pages/progects/ProjectsPage";
import BlogPage from "./pages/blog/BlogPage";
import SQL from "./pages/blog/blogPages/SQL/SQL";
import JavaFx from "./pages/blog/blogPages/JavaFx";
import SQL2 from "./pages/blog/blogPages/SQL/SQL2";
import CoursePage from "./pages/blog/blogPages/CoursePage";
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
          <HeaderSection setLanguage={setLanguage} language={language}/>
          <Routes>
              <Route path={"/home"} element={<HomePage language={language}/>}></Route>

              {/*<Route path={"/projects"} element={<ProjectsPage/>}></Route>*/}
              {/*<Route path={"/blog"} element={<BlogPage/>}></Route>*/}
              {/*<Route path={"/blog/courses/:course_url"} element={<CoursePage/>}></Route>*/}
              {/*<Route path={"/blog/courses/sql/page_1"} element={<SQL/>}></Route>*/}
              {/*<Route path={"/blog/courses/sql/page_2"} element={<SQL2/>}></Route>*/}
              {/*<Route path={"/blog/javaFX"} element={<JavaFx/>}></Route>*/}
              <Route path={"/"} element={<Navigate to="/home"/>}></Route>
          </Routes>
          <FooterSection/>
      </div>
  );
}


export default App;
