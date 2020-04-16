import React from 'react';

import './Description.css';

function Description(props) {
  if (props.mode === 'player'){
    return (
      <>
        <div id="description">
          <div id="description-left">
            <h1>Welcome to VA11 Hall-A</h1>
          </div>
          <div className="divisor"></div>
          <div id="description-right">
            <p>This project(<a href="https://github.com/NiloDrumond?tab=repositories" target="_blank">code</a>) was developed by <a href="https://github.com/NiloDrumond">Nilo Drumond</a>.<br/>
            All rights go to <a href="https://sukeban.moe/index.php/projects/" target="_blank">Sukeban Games</a> and <a href="https://garoad.bandcamp.com/album/va-11-hall-a-second-round" target="_blank">Garoad</a>.</p>
          </div>
        </div>
      </>
    )
  }
  else {
    return (
      <> 
        <div id="description">
          <div id="description-left">
            <p> <span>Add song by clicking the titles on the left.</span><br/>
            You can remove then by double-clicking their title or swap two songs by clicking on both.</p>
          </div>
          <div className="divisor"></div>
          <div id="buttons">
            <button id="clear">Clear</button>
            <button id="ready">Ready!</button>
          </div>
        </div>
      </>
    )
  }
}

export default Description;