import { useState } from "react";

const ContadorClick = () => {
  const [contador, setContador] = useState(10);

  const contar = () => {
    setContador(contador + 1);
  };
  return (
    <div>
      <h1>meu número é:{contador}</h1>
      <button className="botao" onClick={contar}>
        Clique aqui para somar mais um (1)
      </button>
    </div>
  );
};
export default ContadorClick;
