
import MainMenu from "./components/MainMenu.jsx"
import WelcomePage from "./components/WelcomePage.jsx"
import DescriptionPage from "./components/DescriptionPage.jsx"
import { Routes, Route } from "react-router-dom"
import "./style/main.sass"

function App() {

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />}/>
      <Route path="/home" element={<MainMenu />}/>
      <Route path="/description" element={<DescriptionPage />}/>
    </Routes>
  )
}

export default App
