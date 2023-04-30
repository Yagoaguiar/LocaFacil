import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/AdicionarMaquina');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // lógica de autenticação aqui
  };

  return (
    <div>
      <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </label>
          <div>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </label>
        </div>
        <button type="submit" onClick={handleClick}>Entrar</button>
        
      </form>
      </div>
      <a href="/forgot-password">Esqueceu a senha?</a>
      <p>Não tem uma conta? <a href="/signup">Cadastre-se</a></p>
    </div>
  );
}

export default Login;