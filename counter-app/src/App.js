import React, { Component } from 'react';
import NavBar from "./components/navbar";
import Counters from './components/counters'
import './App.css';
import Counter from './components/counter';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counter />
      </main>
    </React.Fragment>

  );
}

export default App;
