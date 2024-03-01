import HeaderSection from "./header/HeaderSection";
import MainPage from "./pages/main/MainPage";
import {Navigate, Route, Routes} from "react-router-dom"
import FooterSection from "./footer/FooterSection";
import ProjectsPage from "./pages/progects/ProjectsPage";
function App() {
  return (
      <div>
          <HeaderSection/>
          <Routes>
              <Route path={"/home"} element={<MainPage/>}></Route>
              <Route path={"/projects"} element={<ProjectsPage/>}></Route>
              <Route path={"/"} element={<Navigate to="/home"/>}></Route>
          </Routes>
          <FooterSection/>
      </div>
  );
}


export default App;
