import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TodoList from './TodoList.jsx'
import Greeting from './Greeting.jsx'
import './index.css'
import ClickButton from './Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <TodoList/>
    <Greeting />
    <ClickButton/>
  </StrictMode>,
)
