import React from 'react'
import { useState } from 'react'
import { useDebugValue } from 'react'


const useIncrement=()=>{

    const [cpt, setCpt] = useState(0)
    const inc = () => setCpt(c => c+1)
    const dec = () => setCpt(c => c-1)
    useDebugValue('cpt : '+cpt)
    return [cpt,inc,dec]
}

function UseCustomHook() {

    const [cpt,incCpt,decCpt] = useIncrement()


  return (
    <div>
        <h2>UseCustomHook</h2>
        {cpt}<br/>
        <button onClick={e => incCpt()}>inc</button>
        <button onClick={e => decCpt()}>dec</button>
    </div>
  )
}

export default UseCustomHook
