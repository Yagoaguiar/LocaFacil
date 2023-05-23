import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from "../src/components/Pages/Home/index";
import Login from "./components/Pages/Login";
import Maquina from "../src/components/Pages/Maquinas/index";
import Contato from "../src/components/Pages/Contato/index";
import EsqueciSenha from "../src/components/Pages/EsqueciSenha/index";
import Menu from "../src/components/Pages/Menu";
import Card from "../src/components/Pages/Card";
import TodasAsMaquinas from "../src/components/Pages/TodasAsMaquinas";
import AdicionarMaquina from "../src/components/Pages/AdicionarMaquina";
import Cadastro from "../src/components/Pages/Cadastro/index";
import Erro404 from "../src/components/Pages/Erro404/erro"

export default function App() {
  const [logado, setLogado] = useState(false);

  function handleLogin(event) {
    setLogado(true);
  }

  function handleLogout(event) {
    setLogado(false);
  }

  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Routes>
        {logado ? (
          <>
            <Route path="/AdicionarMaquina" element={<AdicionarMaquina onLogout={handleLogout}/>} />
            <Route path="/logout" element={<Login onLogout={handleLogout} />} />
          </>
          
        ) : (
          <>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="" element={<Home />} />
            <Route path="/esquecisenha" element={<EsqueciSenha />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/TodasAsMaquinas" element={<TodasAsMaquinas />} />
            <Route path="/maquina" element={<Maquina />} />
            <Route path="/Card" element={<Card />} />
            <Route path="/contato" element={<Contato />} />
          </>
        )}
            <Route path="*" element={<Erro404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}