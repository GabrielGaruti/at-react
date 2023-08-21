import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contato from "./pages/Contato"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Proposta from "./pages/Proposta"

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/proposta" element={<Proposta/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App