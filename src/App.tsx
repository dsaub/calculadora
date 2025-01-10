import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("0")

  function append(number: string) {
    console.log(count);
    if (count.match("0") == null) {
      console.log("a");
      setCount(count + number);
    } else {
      console.log("b");
      setCount("" + number);
    }
    
  }

  function clean() {
    setCount("0")
  }

  function solve() {
    setCount(eval(count).toString());
  }

  return (
    <>
      <div id="app">
        <div className="calculadora">
          <p>{ count }</p>
          <button className="divisor2" onClick={() => append('%')}>%</button>
          <button className="divisor" onClick={() => append('/')}>/</button>
          <button className="multiplication" onClick={() => append('*')}>*</button>
          <button className="resta" onClick={() => append('-')}>-</button>
          <button className="seven" onClick={() => append('7')}>7</button>
          <button className="eight" onClick={() => append('8')}>8</button>
          <button className="nine" onClick={() => append('9')}>9</button>
          <button className="sum" onClick={() => append('+')}>+</button>
          <button className="six" onClick={() => append('6')}>6</button>
          <button className="five" onClick={() => append('5')}>5</button>
          <button className="four" onClick={() => append('4')}>4</button>
          <button className="three" onClick={() => append('3')}>3</button>
          <button className="two" onClick={() => append('2')}>2</button>
          <button className="one" onClick={() => append('1')}>1</button>
          <button className="solution" onClick={solve}>=</button>
          <button className="cero" onClick={() => append('0')}>0</button>
          <button className="coma" onClick={() => append('.')}>.</button>

          <button className="deleteall" onClick={clean}>Clean</button>
        </div>
        
      </div>
    </>
  )
}

export default App
