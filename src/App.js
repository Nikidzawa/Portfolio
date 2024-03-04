import HeaderSection from "./sections/HeaderSection";
import {Navigate, Route, Routes} from "react-router-dom"
import FooterSection from "./sections/footer/FooterSection";
import ProjectsPage from "./pages/progects/ProjectsPage";
import BlogPage from "./pages/blog/BlogPage";
import SQL from "./pages/blog/blogPages/SQL";
import Redis from "./pages/blog/blogPages/Redis";
import StarterSection from "./pages/main/starterSection/StarterSection";
import SkillsSection from "./pages/main/skillSection/SkillsSection";
import JavaFx from "./pages/blog/blogPages/JavaFx";

function App() {
  return (
      <div>
          <HeaderSection/>
          <Routes>
              <Route path={"/home"} element={
                  <main className={"main-container"}>
                      <StarterSection/>
                      <SkillsSection/>
                  </main>
              }>
              </Route>
              <Route path={"/projects"} element={<ProjectsPage/>}></Route>
              <Route path={"/blog"} element={<BlogPage/>}></Route>
              <Route path={"/blog/sql"} element={
                  <main className={"main-container"}>
                      <SQL/>
                  </main>
              }>
              </Route>
              <Route path={"/blog/redis"} element={
                  <main className={"main-container"}>
                      <Redis/>
                  </main>
              }>
              </Route>
              <Route path={"/blog/javaFX"} element={
                  <main className={"main-container"}>
                      <JavaFx/>
                  </main>
              }>
              </Route>
              <Route path={"/"} element={<Navigate to="/home"/>}></Route>
          </Routes>
          <FooterSection/>
      </div>
  );
}


export default App;
