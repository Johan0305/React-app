import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { useState } from "react";

const App = () => {
  /*const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);*/

  const [LR, setStateLR] = useState({
    left: 0,
    right: 0,
  });

  const leftOrRight = (whatButton) => {
    if (whatButton === "left") {
      setStateLR({ left: LR.left + 1, right: LR.right });
    } else if (whatButton === "right") {
      setStateLR({ left: LR.left, right: LR.right + 1 });
    }
  };

  return (
    <div>
      {LR.left}
      <button onClick={() => leftOrRight("left")}>left</button>
      <button onClick={() => leftOrRight("right")}>right</button>
      {LR.right}
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
