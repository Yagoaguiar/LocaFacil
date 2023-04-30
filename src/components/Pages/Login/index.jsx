import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const cadastre = () => {
    navigate('/cadastro')
  }
  const esqueciSenha = () => {
    navigate('/esquecisenha')
  }
  const adicionarMaquina = () => {
    navigate('/AdicionarMaquina');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // lógica de autenticação aqui
  };

  return (
    <div className={styles.loginBox}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label className={styles.userBox}>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={styles.userBox}>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className={styles.botao1} type="submit" onClick={adicionarMaquina}>
          Entrar
        </button>
        <button className={styles.botao2} type="submit" onClick={cadastre}>Cadastre-se</button>
      </form>
      <button className={styles.botao3} type="submit" onClick={esqueciSenha}>Esqueceu Senha?</button>
    </div>
  );

}

export default Login;