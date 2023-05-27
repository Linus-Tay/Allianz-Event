import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable';

const Screen = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    window.addEventListener('storage', () => {
      try {
        const timerValue = localStorage.getItem("timerValue")
        const toggle = localStorage.getItem("toggle")
        const data = JSON.parse(localStorage.getItem("userData"))
        setName(data.name)
        setPhoneNumber(data.phoneNumber)
        setEmail(data.email)
        try {
          if (toggle === 'true') {
            parseInt(timerValue)
            setTimeout(() => clearScreen(), timerValue * 1000);
          }
        } catch {
          if (toggle === 'true') {
            setTimeout(() => clearScreen(), 5000);
          }
        }
      } catch {
        localStorage.setItem("userData", JSON.stringify({}))
      }
    })
  }, []);

  function clearScreen()  {
    setName()
    setPhoneNumber()
    setEmail()
  }

  return (
    <div className='relative screenbg'>
        <div className='text-center contents'>
          <p className='screen text-red-500 text-5xl font-extrabold'>Welcome to STTelemedia GDC Staff Day!</p>
          <Draggable>
          <p className='pt-10 text-black screen text-4xl font-bold'>{name}</p>
          </Draggable>

          <p className='pt-10 screen text-black text-4xl font-bold'>{phoneNumber}</p>

          <p className='pt-10 screen text-black text-4xl font-bold'>{email}</p>

        </div>
    </div>
  )
}

export default Screen