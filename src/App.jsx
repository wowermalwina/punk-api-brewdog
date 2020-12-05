import styles from "./App.module.scss";
import React, {useState, useEffect} from "react";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Card from "./components/Card";

const App = () => {

  const [beers, setBeers] = useState([])

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then((result) => result.json())
    .then((response) => {
      setBeers(response)
    })
  }

   useEffect(() => {
    getBeers();
  }, []);

  const displayBeers = beers.map((beer) => {
    return <Card beer={beer} />

  })

 

  return (
    <section className={styles.app}>
      <NavBar />
      <section className={styles.main}>
          <SideBar />
        <div className={styles.gridContainer}>
        {displayBeers}
        </div>
      </section>
    </section>
  );
}

export default App;
