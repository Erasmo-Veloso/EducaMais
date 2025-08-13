import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            {/* Main Heading */}
            <h1 className={styles.mainHeading} title="ED: Estrutura de Dados">
              Aprenda ED de forma simples, prática e divertida
            </h1>

            {/* Subtext */}
            <p className={styles.subtext}>
              Domine listas, pilhas, filas, árvores e muito mais com exemplos
              claros e interativos. Do básico ao avançado, transforme conceitos
              complexos em habilidades sólidas para resolver problemas de
              programação no dia a dia.
            </p>

            {/* CTA Button */}
            <div className={styles.ctaSection}>
              <button className={styles.ctaButton}>COMEÇAR A EXPLORAR</button>
            </div>
          </div>

          {/* Right Image */}
          <div className={styles.rightImageSection}>
            {/* Background decorative elements */}
            <div className={styles.backgroundElements}>
              {/* Purple gradient circles */}
              <div className={styles.purpleCircle1}></div>
              <div className={styles.purpleCircle2}></div>
              <div className={styles.purpleCircle3}></div>

              {/* Flowing lines */}
              <svg
                className={styles.flowingSvg}
                viewBox="0 0 400 400"
                fill="none"
              >
                <path
                  d="M50 200 Q 200 100 350 200 Q 200 300 50 200"
                  stroke="url(#gradient1)"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.6"
                />
                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Main illustration */}
            <div className={styles.mainIllustration}>
              <img
                src="src/assets/Placeholder.png"
                alt="Student with graduation cap holding an apple"
                className={styles.illustrationImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
