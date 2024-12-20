import { createContext, useState } from "react";
import run from "../Gemini/Gemini";

export const context = createContext();

function Store( props ) {
  const [input, setinput] = useState("");
  const [predata, setpredata] = useState("");
  const [newdata, setnewdata] = useState([]);
  const [recentpromt , setrecentpromt] = useState("")
  const [show , setshow] = useState(true)
  const [loding , setloding] = useState(false)
  const [newrecentpromt , setnewcentpromp] = useState([])

  const onEnter = async (e) => {
    if (input.trim() === "") {
      console.error("Input cannot be empty!");
      return;
    }
    setshow(true)
    setrecentpromt(input) 
    let pppp = input.split("")
      newrecentpromt.unshift(pppp)
    setshow(false)
    setinput("")
    setloding(true)
    const response = await run(input);
    let newresponse = response.split("**")
    setnewdata(newresponse)
    setloding(false)
    }; 
  const value = {
    input,
    setinput,
    predata,
    setnewdata,
    setpredata,
    newdata,
    onEnter,
    recentpromt,
    show,
    loding,
    newrecentpromt,
    setrecentpromt
  };
  return (<context.Provider value={value}>{props.children}</context.Provider>);
}

export default Store;

