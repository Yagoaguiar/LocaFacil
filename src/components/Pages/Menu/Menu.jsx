import { Link } from "react-router-dom"
import styles from './Menu.module.css';


export default function Menu() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ul className={styles.navList}>
          <li className={styles.navBtn}>
            <Link to="/Home">Home</Link>
          </li>
          <li className={styles.navBtn}>
            <Link to="/contato">Contato</Link>
          </li>
          <li className={styles.navBtn}>
            <Link to="/TodasAsMaquinas">Todas as Máquinas</Link>
          </li>
          <li className={styles.navBtn}>
            <Link to="/AdicionarMaquina">Anunciar Sua Máquina</Link>
          </li>
          <li className={styles.navBtn}>
            <Link to="/Card">Card</Link>
          </li>
            <li className={styles.navBtn}>
                <Link to="/Login">Login</Link>
            </li>
        </ul>
        <ul>
        </ul>
      </header>
    </div>
  );
}
