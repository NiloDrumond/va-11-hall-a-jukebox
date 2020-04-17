import React from 'react';

import Player from './Player';
import Selector from './Selector';

function JukeboxLeft(props) {
  if (props.mode === 'player'){
    return(
      <div id="left">
        <Player onClick={props.onClick}/> 
      </div>
    )
  }
  else {
    return(
      <div id="left">
        <Selector /> 
      </div>
    )
  }
  
}

export default JukeboxLeft