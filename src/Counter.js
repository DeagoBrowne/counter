import React, { useState } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0)

  const countUp = () => setCount(newCount => newCount += 1)
  const countDown = () => setCount(newCount => newCount -= 1)
  const reset = () => setCount(0);

  return (
    <div className='container'>
      <div className='counter-circle'>
        <h1 className='counter'>{count}</h1>
      </div>
      <div className='button-container'>
        <button className='counter-button' onClick={countUp}>+1</button>
        <button className='counter-button' onClick={countDown}>-1</button>
      </div>
      <button className='counter-button' onClick={reset}>RESET</button>
    </div>
  )
}