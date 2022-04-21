import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Database } from './components/userdetails'

 function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar>
     
     </Navbar>
     <Database></Database>
    </div>
  )
}

export default App
