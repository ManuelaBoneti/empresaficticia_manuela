import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import Footer from "./componentes/Footer/index.js";

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/servicos" element={<Servicos />}/>
          <Route path="/contato" element={<Contato />}/>
          <Route path="*" element={<div className="pagina">Página não encontrada</div>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
