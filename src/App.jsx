import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import vueLogo from './assets/vue-js.svg'
import Game from './components/Game'
import Footer from './components/Footer'
import Header from './components/Header'
import LogoGenerator from './components/logoGenerator'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const [countLogo, setCountLogo] = useState(0);
  const [logoArray, setLogoArray] = useState([]);
  const [spining, setSpin] = useState(false);

  function updateCountLogo() {
    setCountLogo(prev => {
      const nextCount = Math.min(prev + 1, 3);
      if (nextCount === 1) setLogoArray([viteLogo]);
      else if (nextCount === 2) setLogoArray([viteLogo, reactLogo]);
      else if (nextCount === 3) setLogoArray([viteLogo, reactLogo, vueLogo]);
      return nextCount;
    });
  }

  function updateSpin() {
    setSpin(prev => !prev);
  }

  function resetLogos() {
    setCountLogo(0);  
    setLogoArray([]);
    setSpin(false);
  }

  return (
    <>
      <Header/>
      <LogoGenerator 
        logoArray = {logoArray}
        spining = {spining}
      />
      {/* {console.log("LogoDisplay props:", logoArray, spining)} */}
      <h1>Vite + React</h1>
      <div className="card">
        <Game
          setCountLogo = {updateCountLogo}
          setSpin = {updateSpin}
          resetLogos={resetLogos}
        />
      </div>
      <Footer/>
    </>
  )
}

export default App
