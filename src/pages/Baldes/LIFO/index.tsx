import React, { useState } from 'react';
import styles from './index.module.css';

interface Props {
  elementos: number[];
  onAdicionar: (valor: number) => void;
  onRemover: () => void;
  id: number;
}

const LifoBalde: React.FC<Props> = ({ elementos, onAdicionar, onRemover, id }) => {
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
      <h3 className={styles.baldeTitulo}>🪣 Balde LIFO (ID: {id})</h3>
      
      <form onSubmit={handleAdd} className={styles.baldeForm}>
        <input
          type="number"
          value={input}
          onChange={e => setInput(e.target.value)}
          className={styles.baldeInput}
          placeholder="Quantidade de água (L)"
        />
        <button type="submit" className={`${styles.baldeButton} ${styles.add}`}>
          💧 Adicionar água no balde
        </button>
      </form>
      
      <button
        onClick={onRemover}
        disabled={elementos.length === 0}
        className={`${styles.baldeButton} ${styles.remove}`}
      >
        🪣 Retirar água do balde
      </button>

      <div className={styles.baldeStack}>
        {elementos.length === 0 ? (
          <div className={styles.baldeVazio}>O balde está seco 😢</div>
        ) : (
          [...elementos].reverse().map((el, idx) => (
            <div key={idx} className={styles.baldeAgua}>
              💧 {el}L {idx === 0 && <span className={styles.topo}>⬆ Topo</span>}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LifoBalde;
