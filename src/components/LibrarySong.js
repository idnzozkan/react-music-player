import { computeHeadingLevel } from "@testing-library/react";
import React from "react";

const LibrarySong = ({
  song,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);

    // keep it as playing if it is playing
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
