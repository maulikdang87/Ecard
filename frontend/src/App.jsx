import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Identity } from './components/identity'
import { Card } from './components/card'
import axios from "axios"



function App() {
 

  const [persons, setPersons] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/cards").then(async(res)=>
      {const json = await res.json()
        setPersons(json.response)
      })
  },[])
  
  console.log(persons)
  return (
      <div>
      <Card data={persons}></Card>
      </div> 
  )
}

export default App
