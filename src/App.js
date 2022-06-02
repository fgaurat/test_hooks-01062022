import { useCallback } from "react";
import { useState } from "react";
import { PureComponent01, PureComponent02 } from "./PureComponent";
import UseEffect from "./UseEffect";
import UseMemo from "./UseMemo";
import UseReducer from "./UseReducer";
import UseState from "./UseState";

function App() {
  const [show, setShow] = useState(false);
  const theValue = "Une valeur"

  const onClickPureComponent02 = useCallback( () =>{
    console.log("onClickPureComponent02")
  },[])

  // const onClickPureComponent02 = () =>{
  //   console.log("onClickPureComponent02")
  // }



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
    </div>
  );
}

export default App;
