import React, { useState } from "react";
import LifoBalde from "./LIFO";
import FifoBalde from "./FIFO";
import styles from './index.module.css';

type BaldeType = "LIFO" | "FIFO";

interface Balde {
  id: number;
  tipo: BaldeType;
  elementos: number[];
}

const Baldes = () => {
  const [baldes, setBaldes] = useState<Balde[]>([]);
  const [novoTipo, setNovoTipo] = useState<BaldeType>("LIFO");
  const [contador, setContador] = useState(1);

  const adicionarBalde = (e: React.FormEvent) => {
    e.preventDefault();
    setBaldes((prev) => [
      ...prev,
      { id: contador, tipo: novoTipo, elementos: [] },
    ]);
    setContador((c) => c + 1);
  };

  const adicionarElemento = (id: number, valor: number) => {
    setBaldes((prev) =>
      prev.map((balde) =>
        balde.id === id
          ? { ...balde, elementos: [...balde.elementos, valor] }
          : balde
      )
    );
  };

  const removerElemento = (id: number) => {
    setBaldes((prev) =>
      prev.map((balde) => {
        if (balde.id !== id) return balde;
        if (balde.tipo === "LIFO") {
          return { ...balde, elementos: balde.elementos.slice(0, -1) };
        } else {
          return { ...balde, elementos: balde.elementos.slice(1) };
        }
      })
    );
  };

  return (
    <div className={styles.container}>
      <h1>Baldes Dinâmicos</h1>
      <form onSubmit={adicionarBalde} style={{ marginBottom: "2rem" }}>
        <label>
          Tipo:
          <select
            value={novoTipo}
            onChange={(e) => setNovoTipo(e.target.value as BaldeType)}
          >
            <option value="LIFO">LIFO</option>
            <option value="FIFO">FIFO</option>
          </select>
        </label>
        <button type="submit">Criar novo balde</button>
      </form>

      <h1>LIFO</h1>
      <div className={styles.baldesRow}>
        {baldes.map(
          (balde) =>
            balde.tipo === "LIFO" && (
              <div className={styles.baldeCard} key={balde.id}>
                <LifoBalde
                  id={balde.id}
                  elementos={balde.elementos}
                  onAdicionar={(valor) => adicionarElemento(balde.id, valor)}
                  onRemover={() => removerElemento(balde.id)}
                />
              </div>
            )
        )}
      </div>
      <h1>FIFO</h1>
      <div className={styles.baldesRow}>
        {baldes.map(
          (balde) =>
            balde.tipo === "FIFO" && (
              <div className={styles.baldeCard} key={balde.id}>
                <FifoBalde
                  id={balde.id}
                  elementos={balde.elementos}
                  onAdicionar={(valor) => adicionarElemento(balde.id, valor)}
                  onRemover={() => removerElemento(balde.id)}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Baldes;
