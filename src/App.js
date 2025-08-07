import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import Banner from "./componentes/Banner/index.js";
import Footer from "./componentes/Footer/index.js";



function App() {
  return (
    <div>
      <Banner />
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/servicos" element={<Servicos />}/>
          <Route path="/contato" element={<Contato />}/>
          <Route path="*" element={<div>Página não encontrada</div>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
