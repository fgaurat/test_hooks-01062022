import { useCallback } from "react";
import { useRef } from "react";
import { useState } from "react";
import { PureComponent01, PureComponent02 } from "./PureComponent";
import UseCustomHook from "./UseCustomHook";
import UseEffect from "./UseEffect";
import UseMemo from "./UseMemo";
import UseReducer from "./UseReducer";
import UseRef from "./UseRef";
import UseState from "./UseState";

function App() {
  const [show, setShow] = useState(false);
  const theValue = "Une valeur"
  const childRef = useRef();

  const onClickPureComponent02 = useCallback( () =>{
    console.log("onClickPureComponent02")
  },[])

  // const onClickPureComponent02 = () =>{
  //   console.log("onClickPureComponent02")
  // }

  const onButtonClick = ()=>{
    childRef.current.focus()
    console.log(childRef.current.theValue())
  }

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
        <UseMemo></UseMemo>
        <hr />
        <PureComponent01 value={theValue}/>
        <hr />
        <PureComponent02 onClick={onClickPureComponent02}/>
        <hr />
        <button onClick={onButtonClick}>Focus the input</button>

        <UseRef ref ={childRef}></UseRef>
        <hr />
        <UseCustomHook/>
        <hr />

    </div>
  );
}

export default App;
