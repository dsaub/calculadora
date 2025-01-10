import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState("0")

  return (
    <>
      <div id="app">
        <div className="calculadora">
          <p>0</p>
          <button className="divisor2">%</button>
          <button className="divisor">/</button>
          <button className="multiplication">*</button>
          <button className="resta">-</button>
          <button className="seven">7</button>
          <button className="eight">8</button>
          <button className="nine">9</button>
          <button className="sum">+</button>
          <button className="six">6</button>
          <button className="five">5</button>
          <button className="four">4</button>
          <button className="three">3</button>
          <button className="two">2</button>
          <button className="one">1</button>
          <button className="solution">=</button>
          <button className="cero">0</button>
          <button className="coma">,</button>
        </div>
        
      </div>
    </>
  )
}

export default App
