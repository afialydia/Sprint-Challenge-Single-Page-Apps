import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <main> 
      <CharacterList />
    </main>
  );
}
