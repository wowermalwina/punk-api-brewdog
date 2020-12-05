import React from "react";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <section className={styles.sidebar}>
      <h2>Search {"&"} Filter</h2>
      <div className={styles.underline}>
      <div></div>
      <div></div>
      </div>
      <input 
      className={styles.search}
      type="text" 
      aria-label="search beer" 
      placeholder="Search for Beer...">
      </input>
      <div className={styles.filterContainer}>
        <h3>Filters:</h3>
        <form action="">
          <label>
                High ABV ({">"} 6.0%)
                <input
                  name="isGoing"
                  type="checkbox" />
            </label>
              <label>
                Classic Range
                <input
                  name="isGoing"
                  type="checkbox" />
            </label>
              <label>
                Acidic ({"<"}4)
                <input
                  name="isGoing"
                  type="checkbox" />
            </label>
      </form>


      </div>
     <div className={styles.details}>
        <p>ABV : Alcohol by volume</p>
        <p>IBU : International Bittterness Index</p>
        <p>EBC : European Brewary Convention</p>

     </div>
    </section>
  );
};

export default SideBar;
