import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowinfoProps from './components/Showinfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ShowinfoProps name="Toaibv" age = {20}/>
    </div>
  )
}

export default App
