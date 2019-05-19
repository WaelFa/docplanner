import React from 'react';
import './App.css';
import Navigation from './navbar.js'
import Paragraphs from './paragraphs.js'
import Cards from './cards.js'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Paragraphs />
      <Cards />
    </div>
  );
}

export default App;
