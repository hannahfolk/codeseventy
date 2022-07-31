import logo from './logo.svg'
import './App.css'

import { Hero } from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Code 70
          <ul>
            <li>Create an event for the tournament.</li>
            <li> Select how many rings (carpets). One HJ per carpet.</li>
          </ul>
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Hero />
    </div>
  )
}

export default App
