import React from "react";
import styles from "./Card.module.scss";
import CardFront from "../CardFront";
import CardBack from "../CardBack";

const Card = (props) => {
  const {beer} = props;

  return (
    <section className={styles.card}>
      <CardFront beer={beer} />
      {/* <CardBack beer={beer} /> */}
    </section>
  );
};

export default Card;
