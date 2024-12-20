import React, { useContext, useState } from 'react';
import './Searchbar.css';
import { FaMicrophone } from "react-icons/fa6";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { context } from '../../Context/Context';
import { IoSend } from "react-icons/io5";
import { FaFileUpload } from "react-icons/fa";
export default function Searchbar() {
  const {input,
    setinput,
    onEnter
    } = useContext(context)
  const {
      transcript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    } 
  return (
    <>
      <div className="search-box">
        <div className="search-box-items">
        <FaFileUpload />
        <FaMicrophone className="micro-phone" onClick={SpeechRecognition.startListening}  style={{cursor:"pointer"}}/>
        <IoSend onClick={onEnter} style={{cursor:"pointer"}}/>
        </div>
        <input
          type="text"
          placeholder="Ask Gemini"
          value={`${input}`}
          onChange={(e)=>setinput(e.target.value)}  
        />
      </div>
    </>
  );
}
