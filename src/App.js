import React from 'react';
import VendingMachine from './VendingMachine'
import Chips from './Chips'
import Sardines from './Sardines'
import Soda from './Soda'
import Navbar from './Navbar'
import { Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <switch>
        <Route exact path='/' render={() => <VendingMachine />} />
        <Route exact path='/soda' render={() => <Soda />} />
        <Route exact path='/sardines' render={() => <Sardines />} />
        <Route exact path='/chips' render={() => <Chips />} />
      </switch>
    </div>
  );
}

export default App;
