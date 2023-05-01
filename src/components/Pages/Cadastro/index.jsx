import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cadastro.module.css'
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
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={handleNomeChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            value={senha}
            onChange={handleSenhaChange}
          />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;