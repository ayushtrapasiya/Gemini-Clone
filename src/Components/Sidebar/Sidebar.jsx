import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { FiMenu } from "react-icons/fi";
import { Button } from "@mui/material";
import { FiPlusCircle } from "react-icons/fi";
import { MdDiamond } from "react-icons/md";
import { MdHelp } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { GiBackwardTime } from "react-icons/gi";
import { context } from "../../Context/Context";
import { MdOutlineHistoryEdu } from "react-icons/md";
import run from "../../Gemini/Gemini";
export default function Sidebar({toggle , settoggle}) {

   let {newrecentpromt , setrecentpromt , newresponse , setnewdata} = useContext(context)
    
 async function sendvalue(value){
   setrecentpromt(value)
   const response = await run(value);
   let newresponse = response.split("**")
   setnewdata(newresponse)
 }
  return (
    <div className={ 'sidebar'}>
      <div className="top-part">
        <Button variant="text"  onClick={()=>settoggle(!toggle)}>
          <FiMenu color="white" className="icon1"/>
        </Button>
        <Button variant="text" onClick={()=> window.location.reload()}>
          <FiPlusCircle color="white" className="icon2"  />
        </Button>
        <div className="history">
           {newrecentpromt.map((value  , index)=>{
                return (<>
                    {toggle ? <p onClick={()=>sendvalue(value)}><MdOutlineHistoryEdu /> &nbsp; &nbsp;{value}</p> :  ''} 
                    </>
                  )
                })}
                </div>
      </div>
      <div className="bottom-part">
        <Button variant="text">
          <MdDiamond color="white" className="icon1" />
        </Button>{" "}
        <Button variant="text">
          <GiBackwardTime color="white" className="icon1" />
        </Button>{" "}
        <Button variant="text">
          <MdHelp  color="white" className="icon1" />
        </Button>{" "}
        <Button variant="text">
          <IoSettings color="white" className="icon1" />
        </Button>
      </div>
    </div>
  );
}
