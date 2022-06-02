import React from "react";
import { useMemo } from "react";
import { useState } from "react";



function longWork(t = 500) {
    console.log("longWork");
    const end = Date.now() + t;
    while (Date.now() < end) {}
    console.log("end longWork");
  }


const toUpper= (s) => {
    longWork()
    return s.toUpperCase()
}


function UseMemo() {

    const [a, setA] = useState("")
    const [b, setB] = useState("")

    // avant : const bUpper = toUpper(b)
    const bUpper = useMemo(() => toUpper(b), [b])

  return (
    <div>
      <h2>UseMemo</h2>
        a: <input type="text" value={a} onChange = {e=>setA(e.target.value)}/>
        b: <input type="text" value={b} onChange = {e=>setB(e.target.value)}/>
        <br />
        a: {a}, b:{bUpper}

    </div>
  );
}

export default UseMemo;
