import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const inter = setInterval(()=>{
        console.log("inc")
        setCount(c => c+1)
    },1000)
    return () => {
        console.log('cleanUp')
        clearInterval(inter)
    };
  
}, [])


useEffect(()=>{
    document.title = `count : ${count}`
},[count])
  

  return (
    <div>
      <h2>UseEffect</h2>
      {count}<br/>
    </div>
  );
}

export default UseEffect;
