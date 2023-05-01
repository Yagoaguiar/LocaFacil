import React, { useState } from "react";
import { Link } from 'react-router-dom';
import style from './Cadastro.module.css'

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aqui você pode realizar a lógica de cadastro, como enviar os dados para um servidor.

    // Limpa os campos após o envio
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <div className={style.formContainer}>
      <form className={style.Mainform} onSubmit={handleSubmit} >
        <h1 className={style.mainTittle}>Cadastro</h1>
        <label className={style.mainLabel}>
          Nome:
          <input
            className={style.mainInput}
            type="text"
            value={nome}
            onChange={handleNomeChange}
          />
        </label>
        <br />
        <label className={style.mainLabel}>
          Email:
          <input
            className={style.mainInput}
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <label className={style.mainLabel}>
          Senha:
          <input
            className={style.mainInput}
            type="password"
            value={senha}
            onChange={handleSenhaChange}
          />
        </label>
        <br />
        <Link to="/login">
        <button className={style.Bt} type="submit">Cadastrar</button>
        </Link>
      </form>
    </div>
  );
};

export default Cadastro;