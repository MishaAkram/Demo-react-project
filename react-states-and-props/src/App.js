import React from 'react'
import Nav from './components/Nav'
import './App.css';
import Tweets from './components/Tweets';

function App() {
  const tweets=[{name:"Misha",tweet:"Raect ughh"},
                {name:'traversy media',tweet:"whats up guys!"},
                {name:'weddevsimplified',tweet:"hey guys im simplified the web"}]
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
