import React from 'react';
import Music from './Music';

import './Selector.css';

import selector_left from '../assets/icons/selector_left.png';
import selector_right from '../assets/icons/selector_right.png';


function Selector(props) {
  return (
    <div id="selector">
      <div id="please-select">
        <p>Please, select a song</p>
      </div>
      <div id="music-selector">
        <Music color="blue" title="Every Day is Night"/>
        <Music color="blue" title="Every Day is Night"/>
        <Music color="blue" title="Every Day is Night"/>
        <Music color="blue" title="Every Day is Night"/>
        <Music color="blue" title="Every Day is Night"/>
      </div>
      <div id="page-selector">
        <img src={selector_left} alt="left"/>
        <p>1/12</p>
        <img src={selector_right} alt="right"/>
      </div>
    </div>
  )
}

export default Selector;