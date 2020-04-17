import React from 'react';
import './Music.css';

function Music(props) {
  if (props.color === 'red') {
    return (
      <div className="music-container red" onClick={props.onClick}>
        <p className="number">{props.number}</p>
        <p className="title">{props.title}</p>
      </div>
    );
  }
  else if (props.color === 'yellow') {
    return (
      <div className="music-container yellow" onClick={props.onClick}>
        <p className="number">{props.number}</p>
        <p className="title">{props.title}</p>
      </div>
    );
  }
  else {
    return (
      <div className="music-container blue">
        <p className="title">{props.title}</p>
      </div>
    )
  } 
}

export default Music;