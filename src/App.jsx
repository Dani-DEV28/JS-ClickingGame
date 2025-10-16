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

  return (
    <>
      <Header/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react, spin" alt="React logo"/>
        </a>
        {/* <img src={vueLogo} className= {`logo react ${false ? "spin" : ""}`} alt="React logo"/> */}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Game/>
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
