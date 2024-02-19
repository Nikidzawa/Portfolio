import './App.css';
import HeaderSection from "./header/HeaderSection";
import MainPage from "./pages/main/MainPage";
import {Navigate, Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
        <HeaderSection/>
        <Routes>
            <Route path={"/home"} element={<MainPage/>}></Route>
            <Route path={"/"} element={<Navigate to="/home" />}></Route>
        </Routes>
    </div>
  );
}

export default App;
