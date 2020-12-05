import React, { useState } from "react";
import styles from "./Card.module.scss";
import CardFront from "../CardFront"
import CardBack from "../CardBack"

const Card = (props) => {

  const {beer} = props
  const [isRotated, setRotated] = useState(false);
  const rotate = isRotated ? styles.rotate : "";

  return (
    <section 
     className={`${rotate} ${styles.card}`}
     onClick={() => setRotated(!isRotated)}>
      <div className={styles.front}>
       <CardFront beer={beer}/>
      </div>
      <div className={styles.back}>
        <CardBack beer={beer}/>
      </div>
    </section>
  );
};

export default Card;