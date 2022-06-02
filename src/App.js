import { useState } from "react";
import UseEffect from "./UseEffect";
import UseReducer from "./UseReducer";
import UseState from "./UseState";

function App() {
  const [show, setShow] = useState(false);
  
  return (
    <div style={{margin:"50px"}}>
        <h1>Test Hooks !</h1>
        <hr />
        <UseState></UseState>
        <hr />
        <button onClick = {e => setShow(!show)}>show useffect</button>
        {show && <UseEffect></UseEffect>}
        <hr />
        <UseReducer></UseReducer>
        <hr />
    </div>
  );
}

export default App;
