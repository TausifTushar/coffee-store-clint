import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddNewCoffee from './Componentes/AddNewCoffee/AddNewCoffee'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Componentes/AddNewCoffee/CoffeeCard/CoffeeCard'

function App() {
  
  const coffees = useLoaderData()

  return (
    <>
      
      <h1 className='text-6xl '>Vite + React</h1>
      <AddNewCoffee></AddNewCoffee>

      <p>All Data: {coffees.length}</p>

      {
        coffees.map((coffee)=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
      
    </>
  )
}

export default App
