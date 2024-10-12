import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card/Card'

function App() {
  
  let products = [
    {
      id: 1,
      brand: "iphone",
      model: "16 pro max",
      price: "1400$",
      color: "red"
    },
    {
      id: 2,
      brand: "samsung",
      model: "s24 ultra",
      price: "1200$",
      color: "red"
    },
    {
      id: 3,
      brand: "nokia",
      model: "p90",
      price: "800$",
      color: "green",
    },
    {
      id: 4,
      brand: "iphone",
      model: "13",
      price: "1000$",
      color: "red"
    },
    {
      id: 5,
      brand: "xiaomi",
      model: "realme",
      price: "500$",
      color: "green"
    }
  ]

  return (
    <>
    {products.map( item => (
      <Card brand={item.brand} model={item.model} price={item.price} color={item.color}/>
    ))}
     
    </>
  )
}

export default App
