import React from "react";
import styles from "./CardBack.module.scss";

const CardBack = (props) => {
  const { description, ingredients, food_pairing, ebc, ibu, ph} = props.beer
  
  return (
    <section className={styles.cardBack}>
      <h1>Description:</h1>
      <p>{description}</p>
      <p>{description}</p>
      {/* <p>{ingredients}</p> */}
      <p>{food_pairing}</p>
      <p>{ebc}</p>
      <p>{ibu}</p>
      <p>{ph}</p>
    </section>
  );
};

export default CardBack;
