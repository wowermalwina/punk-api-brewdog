import React from "react";
import styles from "./NavBar.module.scss";
import logo from "../../assets/logo.png"

const NavBar = () => {
  return (
    <section className={styles.nav}>

      <div className={styles.leftSide}>
      <img src={logo} alt="BrewDog logo"></img>
        <div className={styles.title}>
          <h1>BrewDog</h1>
          <p>Catalogue</p>
        </div>
      </div>
      
      <div className={styles.rightSide}>
        <a href="#">Home</a>
        <a href="#">Favorites</a>
      </div>
    </section>
  );
};

export default NavBar;
