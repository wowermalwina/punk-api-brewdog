import React from "react";
import styles from "./CardFront.module.scss";

const CardFront = (props) => {
  const {image_url, name, tagline, abv, first_brewed} = props.beer
  return (
    <section className={styles.cardFront}>
      <img src={image_url} alt="Beer" />
      <h1>{name}</h1>
      <h2>{tagline}</h2>
      <div className={styles.bottomText}>
        <p>{abv}</p>
        <p>{first_brewed}</p>
        </div>
    </section>
  );
};

export default CardFront;
