import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Dashboard1 from './components/Dashboard1'
import Dashboard2 from './components/Dashboard2'
import Navbar from './components/Navbar'
function App() {
  const [response, setResponse] = useState("")

  const updateResponse = async() => {
    const res = await fetch('http://localhost:8000/api/hello-world/');
    const data = await res.json();
    setResponse(data["message"])
  }
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="" element={<Dashboard1/>}/>
          <Route path="/dashboard2" element={<Dashboard2/>}/>
        </Routes>
      </Navbar>
    </>
  )
}

/*
<button onClick={() => updateResponse()}>
          response is {response}
        </button>
        <p>
*/
export default App
