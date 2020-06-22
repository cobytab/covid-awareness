import React from 'react';
import './App.css';
import Home from './components/Home';
import Cards from './components/Cards';
import Facts from './components/Facts';
import Video from './components/Video';
import StaySafe from './components/StaySafe';

function App() {
  return (
    <div className="App">
      <Home />
      <Cards />
      <Facts />
      <Video />
      <StaySafe />
    </div>
  );
}

export default App;
