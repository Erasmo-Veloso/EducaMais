
import styles from "../../styles/globals.module.css";
import Header from "../../componets/Header";
import HeroSection from "../../componets/HeroSection";
import InfoCards from "../../componets/InfoCards";

const Home = () => {
  return (
    <div className={styles.background} style={{ minHeight: '100vh' }}>
      <Header />
      <HeroSection />
      <InfoCards />
    </div>
  );
};

export default Home;
