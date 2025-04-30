import styles from './navBar.module.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <ul>
            <Link className={styles.link} to='/'>Главная</Link>
            <Link className={styles.link} to='/game'>Тренажер</Link>
        </ul>
    );
}

export default NavBar;