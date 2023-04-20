import React from 'react'
import { useState } from 'react'


const Greetings = (props) => {
  const [name, setName]= useState('John Snow')
  const handleClick=()=> setName('Tyron Lanyster') 
  return (
    <div>
      <p>hello my name is {name}</p>
        {/* <h1>Hello {props.name}</h1> */}
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Greetings