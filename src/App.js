import React, { useState, useEffect } from 'react';
import './App.css';

import Music from './Components/Music';
import Description from './Components/Description';
import JukeboxLeft from './Components/JukeboxLeft';

function App() {
  const [mode, setMode] = useState('player');

  function handleGoToPlayer(e){
    e.preventDefault();

    setMode('player');
  }

  function handleGoToSelector(e){
    e.preventDefault();

    setMode('selector');
  }

  return (
    <div className="App">
      <main>
        <div id="jukebox">
          <JukeboxLeft mode={mode} onClick={handleGoToSelector}/>
          <div id="right">
            <div id="red-music">
              <Music color="red" title="Every Day is Night" number="1" />
              <Music color="red" title="Every Day is Night" number="2" />
              <Music color="red" title="Every Day is Night" number="3" />
              <Music color="red" title="Every Day is Night" number="4" />
              <Music color="red" title="Every Day is Night" number="5" />
              <Music color="red" title="Every Day is Night" number="6" />
              <Music color="red" title="Every Day is Night" number="7" />
              <Music color="red" title="Every Day is Night" number="8" />
              <Music color="red" title="Every Day is Night" number="9" />
              <Music color="red" title="Every Day is Night" number="10" />
              <Music color="red" title="Every Day is Night" number="11" />
              <Music color="red" title="Every Day is Night" number="12" />
            </div>
          </div>
        </div>
        <div className="divisor"></div>
        <Description mode={mode} onClick={handleGoToPlayer}/>
      </main>
    </div>
  );
}

export default App;
