import React from "react";
import styles from "./CardBack.module.scss";

const CardBack = (props) => {
  const { description, food_pairing, ebc, ibu, ph} = props.beer

    const food = food_pairing.map((food, index) => {

    return (
      <li key={index}>
        {food}
      </li>
    )
  });
  
  return (
    <section className={styles.cardBack}>
      <h1>Description:</h1>
      <p>{description}</p>
      <h1>Food Pairings:</h1>
      <p>{food}</p>
      <p>{ebc}</p>
      <p>{ibu}</p>
      <p>{ph}</p>
    </section>
  );
};

export default CardBack;
