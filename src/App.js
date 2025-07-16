import { useState } from 'react';
import './App.css';
import Buttonpanel from './Components/Buttonpanel';
import { evaluate } from 'mathjs';
// import Display from './Components/Display';

function App() {

  const [display, setDisplay] = useState("0");
 

  function numberappend(a){
    let operators =["=","+","-","/","*"]
    if(a == "test"){
      setDisplay((val) => evaluate(val))
      console.log("function in",display)
    }else if(a == 'clr') {
      setDisplay("0");
    }
    else if(operators.includes(a)){
      setDisplay((val)=>{
        if(val=== "0"){
          return val;
        }
        return val+a;
      })
    }
    else setDisplay((val) => {
        if(val == "0") val = "";
        return val + a;
    }) 
  }
// console.log("from display",display)
  return (
    <div className="App">
      {/* <Display display={display}/> */}
      <Buttonpanel send={(a) => { numberappend(a) }} display={display}/>
    </div>
  );
}

export default App;
