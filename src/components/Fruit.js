import React from "react";
import "../styles/Fruit.css";

//Fruits function component
function Fruit(props) {
  return <li>{props.type + " " + props.emoji}</li>;
}

export default Fruit;
