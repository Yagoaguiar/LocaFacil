import { useNavigate } from "react-router-dom";
function ErrorPage() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate("/");
  }

  function handleLogin() {
    navigate("/login");
  }

  return (
    <div>
      <h1>Para anuncioar máquina faça seu cadastro</h1>
      <button onClick={handleGoBack}>Voltar</button>
      <p>
        Caso ainda não esteja logado, clique no botão a seguir para fazer login:
      </p>
      <button onClick={handleLogin}>Fazer login</button>
    </div>
  );
}

export default ErrorPage;
