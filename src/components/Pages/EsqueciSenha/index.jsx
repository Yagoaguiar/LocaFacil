import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const EsqueciSenha = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode fazer o tratamento do email esquecido, como enviar um email de redefinição de senha

    // Resetar o estado do campo após o envio
    setEmail('');
  };

  return (
    <div>
      <h1>Esqueci a senha</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default EsqueciSenha;
