import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import DashKeywords from './components/dash_Keywords'
import Dashboard2 from './components/Dashboard2'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="" element={<DashKeywords/>}/>
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
