import React from 'react'
import { useState } from 'react'

function UseState() {

    const [count, setCount] = useState(0)



  return (
    <div>
        <h2>UseState</h2>
        {count}<br/>
        <button onClick = {e => setCount(count+1)}>inc</button>

    </div>
  )
}

export default UseState