import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable';

const Screen = () => {
  const [test, setTest] = useState('');

  useEffect(() => {
    window.addEventListener('storage', () => {
      console.log("Change to local storage!");
      try {
        const data = JSON.parse(localStorage.getItem("userData"))
        setTest(data.name)
      } catch {
        setTest("")
      }
      
      
    })
  }, []);

  return (
    <div>
      <Draggable>
        <h1 className='cursor-pointer'>Name: {test}</h1>
      </Draggable>
    </div>
  )
}

export default Screen