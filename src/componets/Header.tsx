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
            <a href="#" className={styles.navLink}>
              Home
            </a>
            <a href="#" className={styles.navLink}>
              Baldes
            </a>
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