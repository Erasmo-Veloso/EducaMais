import React, { useState } from "react";
import LifoBalde from "./LIFO";
import FifoBalde from "./FIFO";
import styles from './index.module.css';
import Header from "../../componets/Header";

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

  const removerBalde = (id: number) => {
    setBaldes((prev) => prev.filter((balde) => balde.id !== id));
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
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Baldes Dinâmicos</h1>
        <form
          onSubmit={adicionarBalde}
          style={{
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            background: "#f5f5f5",
            padding: "1rem",
            borderRadius: "8px",
            boxShadow: "0 2px 8px #0001"
          }}
        >
          <div style={{margin: "auto"}}>
              <label style={{ fontWeight: 500 }}>
                <span>Tipo:</span>
                <select
                  value={novoTipo}
                  onChange={(e) => setNovoTipo(e.target.value as BaldeType)}
                  style={{
                    marginLeft: "0.5rem",
                    padding: "0.3rem 0.7rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc"
                  }}
                >
                  <option value="LIFO">LIFO</option>
                  <option value="FIFO">FIFO</option>
                </select>
              </label>
              <button
                type="submit"
                className={styles.filterButton}
              >
                Criar novo balde
              </button>
          </div>
        </form>
        <h1>Seus baldes LIFO</h1>
        <div className={styles.baldesRow}>
          {baldes
            .filter((balde) => balde.tipo === "LIFO")
            .map((balde) => (
              <div className={styles.baldeCard} key={balde.id} style={{ position: "relative" }}>
                <button
                  onClick={() => removerBalde(balde.id)}
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    background: "#ef4444",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    width: "28px",
                    height: "28px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: "1"
                  }}
                  title="Remover balde"
                >
                  ×
                </button>
                <LifoBalde
                  id={balde.id}
                  elementos={balde.elementos}
                  onAdicionar={(valor) => adicionarElemento(balde.id, valor)}
                  onRemover={() => removerElemento(balde.id)}
                />
              </div>
            ))}
        </div>
        <h1>Seus baldes FIFO</h1>
        <div className={styles.baldesRow}>
          {baldes
            .filter((balde) => balde.tipo === "FIFO")
            .map((balde) => (
              <div className={styles.baldeCard} key={balde.id} style={{ position: "relative" }}>
                <button
                  onClick={() => removerBalde(balde.id)}
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    background: "#ef4444",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    width: "28px",
                    height: "28px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: "1"
                  }}
                  title="Remover balde"
                >
                  ×
                </button>
                <FifoBalde
                  id={balde.id}
                  elementos={balde.elementos}
                  onAdicionar={(valor) => adicionarElemento(balde.id, valor)}
                  onRemover={() => removerElemento(balde.id)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Baldes;
