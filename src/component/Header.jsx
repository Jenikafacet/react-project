import NavBar from './NavBar'
import styles from './header.module.css';
import logo from '../data/logo.svg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className={styles.header__box}>
                <Link className={styles.link} to='/'><img src={logo} alt="logo" width="40px" height="40px" /></Link>
                <NavBar />
            </div>
        </header>
    );
}

export default Header;
