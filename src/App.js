import React from "react";

// Import components
import Player from './components/Player'
import Song from './components/Song'

// Import styles
import style from './styles/app.scss'

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
