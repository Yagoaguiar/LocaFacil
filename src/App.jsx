import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../src/components/Pages/Home/index";
import Login from "./components/Pages/Login/Login";
import Maquina from "./components/Pages/Maquinas/Maquinas";
import Contato from "./components/Pages/Contato/Contato";
import EsqueciSenha from "./components/Pages/EsqueciSenha/EsqueciSenha";
import Menu from "./components/Pages/Menu/Menu";
import Card from "./components/Pages/Card/Card";
import TodasAsMaquinas from "./components/Pages/TodasAsMaquinas/TodasAsMaquinas";
import AdicionarMaquina from "./components/Pages/AdicionarMaquina/AdicionarMaquina";
import Cadastro from "./components/Pages/Cadastro/Cadastro";
import Erro404 from "../src/components/Pages/Erro404/erro";

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
              <Route
                path="/AdicionarMaquina"
                element={<AdicionarMaquina onLogout={handleLogout} />}
              />
              <Route
                path="/logout"
                element={<Login onLogout={handleLogout} />}
              />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
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
