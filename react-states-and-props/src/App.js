import React from 'react'
import Nav from './components/Nav'
import './App.css';
import Tweets from './components/Tweets';

function App() {
  return (
    <div className="App">
      <div className="home">
      <Nav />
      <Tweets/>
      </div>
    </div>
  );
}

export default App;
