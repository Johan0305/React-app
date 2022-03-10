import React from "react";

const Init = (props) => {
  return <h1 style={{ color: props.color }}>Hola {props.nombre}</h1>; //style en CSS se utilizaria como un tipo objeto, entonces usamos tipo objeto para CSS y configurar un color con JavaScript con un ibjeto en si
};

export default Init;
