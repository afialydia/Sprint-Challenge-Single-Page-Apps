import React from "react";

export default function WelcomePage(props) {

  const routeToHomePage = e =>{
    e.preventDefault();
    props.history.push();
  }

  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <button onClick={routeToHomePage} className="md-button shop-button">
       hello from WP
      </button>
    </section>
  );
}
