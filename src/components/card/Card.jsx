import React from 'react'
import "./Card.css"
export default function Card(props) {


  return (
    <div style={{backgroundColor: props.color}} className="myCard">
      <h1>{props.brand}</h1>
      
    </div>
  )
}
