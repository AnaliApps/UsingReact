import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const COLORS = ["pink","green","yellow","purple"]
function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0])
  const onButtonClick = (color)=>()=>{
    setBackgroundColor(color)
  }

  return (
    <div style={{backgroundColor}}>
      {/* <h1>Test title</h1>
      <svg>
        <circle cx="25" cy="75" stroke='green' strokeWidth="2"/>
      </svg>
      <form>
        <input type="text" />
      </form> */}
      
      {COLORS.map((color)=>(
        <button key={color} onClick={onButtonClick(color)}>{color}</button>
      ))}
    </div>
  )
}

export default App
