import React from "react";
import styles from "./CardBack.module.scss";

const CardBack = (props) => {
  const { name, description} = props.beer
  return (
    <section className={styles.cardBack}>
      <p>{name}</p>
      <p>{description}</p>
    </section>
  );
};

export default CardBack;
