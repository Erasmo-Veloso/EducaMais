import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import { TourContext } from "../contexts/TourContext";

const Header = () => {
  const { setTourActive } = useContext(TourContext);
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

            <Link
              to="/baldes"
              className={styles.navLink}
              id="tour-header-baldes"
            >
              Baldes
            </Link>
          </nav>
        </div>

        {/* Right side */}
        <div className={styles.rightSection}>
          <button
            className={styles.filterButton}
            onClick={() => setTourActive(true)}
          >
            Começar a explorar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
