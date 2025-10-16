import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import vueLogo from '/vue-js.svg'
import Game from './components/Game'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const [countLogo, setCountLogo] = useState(0);
  const logoArray = [viteLogo, reactLogo, vueLogo];

  function updateCountLogo() {
    setCountLogo(prev => prev + 1);
  }

  return (
    <>
      <Header/>
      <div>
        {logoArray.slice(0, countLogo).map((logo, i) => (
          <img key={i} src={logo} className="logo" alt={`logo-${i}`} />
        ))}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Game
          setCountLogo = {updateCountLogo} 
        />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer/>
    </>
  )
}

export default App
