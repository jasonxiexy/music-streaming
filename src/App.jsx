import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Player from './components/PLayer'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

function App() {

  const {audioRef, track} = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App 
