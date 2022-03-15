import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { useState } from "react";

const Counter = (props) => <h1>{props.number}</h1>;

const App = () => {
  const [stateCount, setStateCount] = useState(0);
  let updateContador = (dOi) => {
    if (dOi === "increment") {
      setStateCount(stateCount + 1);
    } else if (dOi === "decrem") {
      setStateCount(stateCount - 1);
    }
  };
  let contadorCero = () => setStateCount(0);
  return (
    <div>
      <p>el valor del contador es</p>
      <Counter number={stateCount} />
      <button
        onClick /*a onClick siempre se le debe pasar una función o en sí a cualquier evento, si se quiere hacer lo de en este caso asignar un nombre a on OnClick, debemos hacer una función y luego si, pasar la función donde se ejecuta el codigo y su respectivo contenido FunciónEjemplo("asignación")*/={() =>
          updateContador("increment")
        }
      >
        Incrementar
      </button>
      <button onClick={() => updateContador("decrem")}>decrementar</button>
      <button onClick={contadorCero}>Reset</button>
      <p>{stateCount % 2 === 0 ? "Es par" : "es impar"}</p>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
