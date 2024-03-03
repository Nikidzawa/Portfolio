import HeaderSection from "./sections/HeaderSection";
import MainPage from "./pages/main/MainPage";
import {Navigate, Route, Routes} from "react-router-dom"
import FooterSection from "./sections/footer/FooterSection";
import ProjectsPage from "./pages/progects/ProjectsPage";
import BlogPage from "./pages/blog/BlogPage";
function App() {
  return (
      <div>
          <HeaderSection/>
          <Routes>
              <Route path={"/home"} element={<MainPage/>}></Route>
              <Route path={"/projects"} element={<ProjectsPage/>}></Route>
              <Route path={"/blog"} element={<BlogPage/>}></Route>
              <Route path={"/"} element={<Navigate to="/home"/>}></Route>
          </Routes>
          <FooterSection/>
      </div>
  );
}


export default App;
