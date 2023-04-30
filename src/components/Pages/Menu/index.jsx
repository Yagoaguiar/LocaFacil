import { Link } from "react-router-dom"
import styles from './Menu.module.css';
export default function Menu() {




return (

        <div className={styles.container}>
            <header className={styles.header}>
                <ul className={styles.navList}>
                    <li className={styles.headerBtnGroup}>
                        <Link to="/Home">Home</Link>
                    </li>
                     <li className={styles.headerBtnGroup}>
                        <Link to="/contato">Contato</Link>
                    </li>
                     <li className={styles.headerBtnGroup}>
                        <Link to="/TodasAsMaquinas">Todas as Máquinas</Link>
                    </li>
                     <li className={styles.headerBtnGroup}>
                        <Link to="/login">Login</Link>
                    </li>
                     <li className={styles.headerBtnGroup}>
                        <Link to="/AdicionarMaquina">AdicionarPorra</Link>
                    </li>
                    <li className={styles.headerBtnGroup}>
                        <Link to="/Card">Card</Link>
                    </li>
                </ul>
            </header>
        </div>
    )

}