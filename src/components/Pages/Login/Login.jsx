import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

function Login(props) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onLogin(email, password);
    navigate("/AdicionarMaquina");
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const cadastre = () => {
    navigate('/cadastro')
  }
  const esqueciSenha = () => {
    navigate('/esquecisenha')
  }

  const handleLogin = (e) => {
    e.preventDefault();

  };

  return (
    <div className={styles.loginBox}>
      <h1 className={styles.Txtp}>Login</h1>
      <form onSubmit={handleSubmit}>
        <label className={styles.userBox}>
          E-mail:
          <input
            className={styles.Putin}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={styles.userBox}>
          Senha:
          <input className={styles.Putin}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className={styles.botao1} type="submit">Entrar</button>
        <button className={styles.botao2} type="submit" onClick={cadastre}>Cadastre-se</button>
      </form>
      
      <button className={styles.botao3} type="submit" onClick={esqueciSenha}>Esqueceu Senha?</button>
  

    </div>
  );

}

export default Login;