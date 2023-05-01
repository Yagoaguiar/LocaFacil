import React, { useState } from 'react';
import Styles from './EsqueciSenha.module.css';
import { Link } from 'react-router-dom';



const EsqueciSenha = () => {
  const [email, setEmail] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div>
      <div className={Styles.Box}>
      <h1 className={Styles.TextForm}>Esqueceu a senha?</h1>

      <form  className={Styles.EditarForm} onSubmit={handleSubmit}>
        <label className={Styles.Label}>
          Email:
          <input className={Styles.EditPut} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <Link to="/login">
        <button className={Styles.Btn} type="submit">Enviar</button>
        </Link>
      </form>
      </div>
    </div>
  );
};


export default EsqueciSenha;

