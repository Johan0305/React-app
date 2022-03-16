import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { useState } from "react";

const NoUse = () => <h1>Todavia no se ha usado el contador</h1>;
const ListClicks = ({ clicks }) => <p>{clicks.join(", ")}</p>;
// LOS COMPONENTES DEBEN SIEMPRE ESTAR EN MAYUSCULA AL PRINCIPIO

const App = () => {
  /*const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);*/

  const [LR, setStateLR] = useState({
    left: 0,
    right: 0,
  });

  const [clicks, setStateClicks] = useState([]);
  // dentro de una variable par guardar varios elementos como en este caso, lo pasamos como un objeto
  // si se quiere actulizar el estado, no se puede con el metodo de JS de Objeto.algo, si no, en JSX debe ser en forma de Objeto
  const leftOrRight = (whatButton) => {
    whatButton === "left"
      ? setStateLR(
          {
            ...LR /*aqui usamos el ... para traer todos los valores y que al momento de renderizar el programa estos no desaparezcan*/,
            left: LR.left + 1,
          },
          setStateClicks((prevClicks) => [...prevClicks, "L"])
        )
      : setStateLR(
          {
            ...LR,
            right: LR.right + 1,
          },
          setStateClicks((prevClicks) => [...prevClicks, "R"])
        );
  };

  return (
    <div>
      {LR.left}
      <button className="LR" onClick={() => leftOrRight("left")}>
        left
      </button>
      <button className="LR" onClick={() => leftOrRight("right")}>
        right
      </button>
      {LR.right}
      <br />
      <p>clicks totales:{clicks.length}</p>
      {clicks.length === 0 ? <NoUse /> : <ListClicks clicks={clicks} />}
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
