import styles from './InfoCards.module.css';

const InfoCards = () => {
  const cards = [
  {
    id: 1,
    title: "O que é um LIFO?",
    description: "Último a entrar, primeiro a sair. Como um balde cheio de bolas: você tira sempre a última que colocou.",
    icon: "🪣"
  },
  {
    id: 2,
    title: "O que é uma FIFO?",
    description: "Primeiro a entrar, primeiro a sair. Como uma fila de pessoas: quem chega primeiro sai primeiro.",
    icon: "📦"
  },
  {
    id: 3,
    title: "O que é ED?",
    description: "Estrutura de Dados é como guardamos e organizamos informações para usá-las de forma rápida e inteligente.",
    icon: "🧩"
  }
];


  return (
    <section className={styles.infoSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.cardContent}>
                {/* Icon */}
                <div className={styles.iconContainer}>
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className={styles.cardTitle}>
                  {card.title}
                </h3>

                {/* Description */}
                <p className={styles.cardDescription}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;