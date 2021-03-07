import React from 'react'
import Nav from './components/Nav'
import './App.css';
import Tweets from './components/Tweets';

function App() {
  const name="developedmyMisha";
  return (
    <div className="App">
      <div className="home">
      <Nav />
      <Tweets me={name}/>
      </div>
    </div>
  );
}

export default App;
