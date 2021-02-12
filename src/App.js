import React, { useState } from "react";

// Import components
import Player from './components/Player'
import Song from './components/Song'

// Import styles
import style from './styles/app.scss'

// Import utils
import data from './util'

function App() {
  // States
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
    </div>
  );
}

export default App;
