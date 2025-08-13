// Home.tsx
import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className={styles.containerHome}>
      {/* Header */}
      <header className={styles.headerHome}>
        <div className={styles.logoHome} aria-label="Logo do app">🪣</div>
        <nav>
            <a href="">Home</a>
            <a href="">Baldes</a>
        </nav>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.title}>Bem-vindos, pequenos programadores! 👋</h1>
          <p className={styles.subtitle}>
            Aqui você brinca com <strong>baldes mágicos</strong> para entender como os dados entram e saem.
          </p>
          <div className={styles.ctaRow}>
            <Link to="/lifo" className={`${styles.ctaBtn} ${styles.ctaPrimary}`}>Começar com LIFO</Link>
            <Link to="/fifo" className={`${styles.ctaBtn} ${styles.ctaSecondary}`}>Começar com FIFO</Link>
          </div>
          <p className={styles.helper}>Dica: LIFO tira do topo, FIFO tira da frente 😉</p>
        </div>
        <div className={styles.heroRight}>
          {/* Coloque a ilustração do mascote aqui */}
          <div className={styles.mascotCard} role="img" aria-label="Mascote com dois baldes">
            <div className={styles.mascot}>🤖</div>
            <div className={styles.bucketsPair}>
              <span className={styles.bucketBlue} aria-hidden>🪣</span>
              <span className={styles.bucketGreen} aria-hidden>🪣</span>
            </div>
            <p className={styles.mascotSpeech}>Olá! Eu sou o Balduino. Vamos brincar com água pra aprender lógica?</p>
          </div>
        </div>
      </section>

      {/* Cards LIFO / FIFO */}
      <section className={styles.cardsSection} aria-label="Escolhas de brincadeiras">
        <article className={`${styles.infoCard} ${styles.cardLifo}`}>
          <h2 className={styles.cardTitle}>Balde LIFO</h2>
          <p className={styles.cardText}>A última água que entra é a primeira que sai. Igual uma pilha!</p>
          <ul className={styles.cardList}>
            <li>💧 Adicionar água no balde</li>
            <li>🪣 Retirar água do <strong>topo</strong></li>
            <li>👀 Veja o "Topo" sempre marcado</li>
          </ul>
          <Link to="/lifo" className={styles.cardLink} aria-label="Abrir brincadeira LIFO">Brincar agora</Link>
        </article>

        <article className={`${styles.infoCard} ${styles.cardFifo}`}>
          <h2 className={styles.cardTitle}>Balde FIFO</h2>
          <p className={styles.cardText}>A primeira água que entra é a primeira que sai. Igual uma fila!</p>
          <ul className={styles.cardList}>
            <li>💧 Encher o balde</li>
            <li>🚰 A água sai pela <strong>frente</strong></li>
            <li>👀 A "Frente" fica marcada</li>
          </ul>
          <Link to="/fifo" className={styles.cardLink} aria-label="Abrir brincadeira FIFO">Brincar agora</Link>
        </article>
      </section>

      {/* Seção educativa rápida */}
      <section className={styles.educationStrip}>
        <div className={styles.eduItem}>
          <h3>O que é programação?</h3>
          <p>É dar instruções claras para o computador, uma de cada vez.</p>
        </div>
        <div className={styles.eduItem}>
          <h3>Por que baldes?</h3>
          <p>Porque mostram como as coisas entram e saem: por cima ou pela frente!</p>
        </div>
        <div className={styles.eduItem}>
          <h3>Prontos?</h3>
          <p>Clique num balde e vamos brincar! 🎉</p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footerHome}>
        <small>Feito com carinho para crianças curiosas. ✨</small>
      </footer>
    </main>
  );
}
