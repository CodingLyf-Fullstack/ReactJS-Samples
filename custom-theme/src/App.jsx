import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeProvider, { useTheme } from './ThemeProvider'

function App() {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={`${theme}-theme`}>
      <div>
        <button onClick={toggleTheme}>💡</button>
      </div>
      <h1>Vite + React {theme}</h1>
      
      <p className="read-the-docs">
        Click on the Light button to change the color
      </p>
    </div>
  )
}

export default App
