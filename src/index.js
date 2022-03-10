import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const App = (props) => {
  return <h1>{props.contadorInicial}</h1>;
};

let contador = 0;

const refresh = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App contadorInicial={contador} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

setInterval(() => {
  contador++;
  refresh();
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
