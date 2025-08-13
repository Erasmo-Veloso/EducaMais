import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo/Brand */}
        <div className={styles.leftSection}>
          <h1 className={styles.logo}>BALDES COD</h1>
          
          {/* Navigation */}
          <nav className={styles.nav}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
            
            <Link to="/baldes" className={styles.navLink}>
              Baldes
            </Link>
          </nav>
        </div>

        {/* Right side */}
        <div className={styles.rightSection}>
          <button className={styles.filterButton}>
            Começar a explorar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;