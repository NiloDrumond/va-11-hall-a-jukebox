import React, { useState, useEffect } from 'react';
import './App.css';

import Description from './Components/Description';
import JukeboxLeft from './Components/JukeboxLeft';
import Playlist from './Components/Playlist';

function App() {
  const [mode, setMode] = useState('player');
  const [playlist, setPlaylist] = useState([
    {title: 'Every Day is Night', src:''},
    {title: 'Snowfall', src:''},
    {title: 'Digital Drive', src:''},
    {title: 'RE: Snowfall', src:''},
    {title: 'Meet the Staff', src:''},
    {title: 'A Neon Glow Lights...', src:''},
    {title: 'Nighttime Maneuvers', src:''},
    {title: 'Your Love is a Drug', src:''},
    {title: 'Heart of the City', src:''},
    {title: 'Good for health', src:''},
    {title: 'All Systems Go', src:''},
    {title: 'Karmotrine Dream', src:''} 
  ]);
  const [playing, setPlaying] = useState(0);
  const [selected, setSelected] = useState([1]);

  function handleGoToPlayer(e){
    e.preventDefault();

    setMode('player');
  }

  function handleGoToSelector(e){
    e.preventDefault();

    setMode('selector');
  }

  function handleSelectMusic(index, e) {
    e.preventDefault();
    if (selected.includes(index)){
      let newArr = selected.filter(i => i !== index);
      setSelected(newArr);
    }
    else {
      setSelected([...selected, index]);
    }   
  }

  return (
    <div className="App">
      <main>
        <div id="jukebox">
          <JukeboxLeft mode={mode} onClick={handleGoToSelector}/>
          <div id="right">
            <Playlist playlist={playlist} selected={selected} onClick={(index, e) => handleSelectMusic(index, e)}/>
          </div>
        </div>
        <div className="divisor"></div>
        <Description mode={mode} onClick={handleGoToPlayer}/>
      </main>
    </div>
  );
}

export default App;
