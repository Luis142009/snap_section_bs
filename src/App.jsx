import { Header } from "./components/Header"
import { Abount } from "./pages/Abount"
import { Enlace } from "./pages/Enlace"
import { Final } from "./pages/final"
import { Home } from "./pages/home"
import { Otra } from "./pages/otra"
import { Yes } from "./pages/Yes"


export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Enlace/>
       <Otra/>
       <Yes/>
       <Final/>
       <Abount/>
    
    </>
  )
}
