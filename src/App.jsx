
import MainMenu from "./components/MainMenu.jsx"
import WelcomePage from "./components/WelcomePage.jsx"
import DescriptionPage from "./components/DescriptionPage.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./style/main.sass"

function App() {

  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <WelcomePage />
    },
    {
      path: '/home',
      element: <MainMenu />,
    },
    {
      path: '/description/:id',
      element: <DescriptionPage />
    }
  ])

  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
