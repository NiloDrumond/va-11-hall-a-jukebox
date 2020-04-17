import React from 'react';
import './Player.css'

import player_left from '../assets/icons/player_left.png';
import player_right from '../assets/icons/player_right.png';
import player_pause from '../assets/icons/player_pause.png';
import player_repeat from '../assets/icons/player_repeat.png';
import player_shuffle from '../assets/icons/player_shuffle.png';

function Player(props) {
  return (
    <>
    <div id="player-box">
      <p id="music-player">Music Player</p>
      <div id="icons">
        <img src={player_left} alt="player_left"/>
        <img src={player_pause} alt="player_pause"/>
        <img src={player_right} alt="player_right"/>
        <img src={player_shuffle} alt="player_shuffle"/>
        <img src={player_repeat} alt="player_repeat"/>
      </div>
      <div id="music-title">Every Day is Night</div>
    </div>
    <div id="options">
      <button className="options-button" onClick={props.onClick}>
        Create a playlist
      </button>
      <button className="options-button">
        Random playlist
      </button>
    </div>
    </>
  )
}

export default Player;