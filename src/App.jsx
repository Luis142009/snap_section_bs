import { Header } from "./components/Header"
import { Abount } from "./pages/Abount"
import { Enlace } from "./pages/Enlace"
import { Final } from "./pages/final"
import { Formulario } from "./pages/Formulario"
import { Home } from "./pages/Home"
import { Inicio } from "./pages/Inicio"
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
       <Formulario/>
       <Inicio/>
    
    </>
  )
}
