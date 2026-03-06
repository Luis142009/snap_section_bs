import { BrowserRouter, Route, Routes } from "react-router-dom"
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
      <BrowserRouter>
        <Header />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Header" element={<Header />} />
          <Route path="Enlace" element={<Enlace />} />
          <Route path="Formulario" element={<Formulario />} />
          <Route path="Abount" element={<Abount />} />
          <Route path="Inicio" element={<Inicio />} />
          <Route path="Final" element={<Final />} />
        </Routes>

        

      </BrowserRouter>
    </>
  )
}
