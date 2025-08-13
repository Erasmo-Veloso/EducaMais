import React, { useState } from 'react';
import styles from './index.module.css';

interface Props {
  elementos: number[];
  onAdicionar: (valor: number) => void;
  onRemover: () => void;
  id: number;
}

const FifoBalde: React.FC<Props> = ({ elementos, onAdicionar, onRemover, id }) => {
  const [input, setInput] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const num = Number(input);
    if (isNaN(num)) return;
    onAdicionar(num);
    setInput('');
  };

  return (
    <div className={styles.baldeContainer}>
      <h3 className={styles.baldeTitulo}>🚰 Balde FIFO</h3>

      <form onSubmit={handleAdd} className={styles.baldeForm}>
        <input
          type="number"
          value={input}
          onChange={e => setInput(e.target.value)}
          className={styles.baldeInput}
          placeholder="Quantidade de água (L)"
        />
        <button type="submit" className={`${styles.baldeButton} ${styles.add}`}>
          💧 Encher balde
        </button>
      </form>

      <button
        onClick={onRemover}
        disabled={elementos.length === 0}
        className={`${styles.baldeButton} ${styles.remove}`}
      >
        🚰 Tirar água da frente
      </button>

      <div className={styles.baldeStack}>
        {elementos.length === 0 ? (
          <div className={styles.baldeVazio}>O balde está vazio 😢</div>
        ) : (
          [...elementos].reverse().map((el, idx) => (
            <div key={idx} className={styles.baldeAgua}>
              💧 {el}L {idx === elementos.length-1 && <span className={styles.frente}>⬅ Frente</span>}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FifoBalde;
