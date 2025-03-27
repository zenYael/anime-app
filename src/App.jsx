import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Animes from './components/Animes'

function App() {
  return (
    <div>
      <h1>Top Animes de MyAnimeList</h1>
      <Animes />
    </div>
  )
}

export default App