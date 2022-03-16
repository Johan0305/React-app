const App = () => {
  const contador = useState(0);

  const contadorValue = contador[0];
  const updateContador = contador[1];

  setInterval(() => {
    updateContador(contadorValue);
  }, 2000);
  return <h1>{contadorValue}</h1>;
};

//
const App = () => {
  const [stateCar, setStateCar] = useState(false);
  console.log(stateCar);

  const encenderApagar = () => {
    setStateCar(!stateCar);
  };
  return (
    <div>
      <h1>Tu auto está: {stateCar ? "Encendido" : "Apagado"}</h1>
      <button onClick={encenderApagar}>Encendido / apagado</button>
    </div>
  );
};

// clase 3

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const leftOrRight = (whatButton) => {
    if (whatButton === "left") {
      setLeft(left + 1);
    } else if (whatButton === "right") {
      setRight(right + 1);
    }
  };

  return (
    <div>
      {left}
      <button className="left" onClick={() => leftOrRight("left")}>
        left
      </button>
      <button className="right" onClick={() => leftOrRight("right")}>
        right
      </button>
      {right}
    </div>
  );
};
