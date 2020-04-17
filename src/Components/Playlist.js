import React from 'react';

import Music from './Music';

import './Playlist.css';

export default function Playlist(props) {
  return (
    <div id="red-music">
      <div id="left-music">{props.playlist.slice(0,6).map((music, index) => {
        return props.selected.includes(index) ? (
        <Music color="yellow" key={index} title={music.title} number={index + 1} onClick={e => props.onClick(index, e)}/>
        )
        :
        <Music color="red" key={index} title={music.title} number={index + 1} onClick={e => props.onClick(index, e)}/>
      })}</div>
      <div id="right-music">{props.playlist.slice(6,12).map((music, index) => {
        return props.selected.includes(index + 6) ? (
        <Music color="yellow" key={index+6} title={music.title} number={index + 7} onClick={e => props.onClick(index + 6, e)}/>
        )
        :
        <Music color="red" key={index+6} title={music.title} number={index + 7} onClick={e => props.onClick(index + 6, e)}/>
      })}</div>
    </div>
  )
}