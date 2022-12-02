import Window from "../window/Window";
import React, { useState, useEffect } from "react";
import Music from "./Music";

export default function Timer() {
  const [time, setTime] = useState(10);
  const [timeInput, setTimeInput] = useState(0);
  const [isCool, setIsCool] = useState(true)

  function ActiveTimer (e) {
    e.preventDefault()
    setTime(timeInput)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if(time <=0) 
      setIsCool(false);
      setTime(time-1);
        }, 1000);
      return () => clearInterval(interval);
    }, [time]);

  
    return (
      <Window windowTitle={"Timer.exe"}>
        { isCool && <h1>{time}</h1>}
        { isCool || <div>Nu är tiden slut<Music videoId={"d4RJUGJ4gXc"}></Music></div>}
        <form>
        <input type="number" value={timeInput} onChange={e => {setTimeInput(e.target.value)}}/>
        <button onClick={e => {ActiveTimer(e)}}>click</button>
        </form>
        
        
      </Window>
    );
  }
  
  