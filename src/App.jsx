import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/Pages/Home/index";
import Login from "../src/components/Pages/Login/Login";
import Maquina from "../src/components/Pages/Maquinas/index";
import Contato from "../src/components/Pages/Contato/index";
import EsqueciSenha from "../src/components/Pages/EsqueciSenha/index";
import Menu from "../src/components/Pages/Menu";
import Card from "../src/components/Pages/Card";
import TodasAsMaquinas from "../src/components/Pages/TodasAsMaquinas";
import AdicionarMaquina from "../src/components/Pages/AdicionarMaquina";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/maquina" element={<Maquina />} />
          <Route path="/esquecisenha" element={<EsqueciSenha />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/AdicionarMaquina" element={<AdicionarMaquina />} />
          <Route path="/TodasAsMaquinas" element={<TodasAsMaquinas />} />
          <Route path="/Card" element={<Card />} />
      

          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;