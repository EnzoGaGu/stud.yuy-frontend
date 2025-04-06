import { useState } from 'react'
import './App.css'
import LoginContainer from './components/LoginContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LoginContainer></LoginContainer>
    </div>
  ); 
}

export default App
