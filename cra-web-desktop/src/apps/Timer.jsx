/* eslint-disable no-unused-vars */
import Window from "../window/Window";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import alarm from "../assets/alarm.mp3";

export default function Timer() {
  const [time, setTime] = useState(null);
  const [timeInput, setTimeInput] = useState(0);
  const [isCool, setIsCool] = useState(true)
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 0,
      loop: 1,
      disablekb: 1
    }
  };

  function ActiveTimer (e) {
    e.preventDefault()
    setTime(timeInput)
  }
  useEffect(() => {
    const interval = time? setInterval(() => {
      if(time <=0) 
      setIsCool(false);
      else setIsCool(true);
      setTime(time-0.01);
        }, 10):null
      return () => clearInterval(interval);
    }, [time]);

    
    return (
      <Window windowTitle={"Timer.exe"}>
        { isCool && <h1>{Math.round(time * 100) / 100}</h1>}
        { isCool || <h2>Nu är tiden slut...<audio src={alarm} autoPlay loop controls /></h2>}
        <form>
        <input type="number" value={timeInput} onChange={e => {setTimeInput(e.target.value)}}/>
        <button onClick={e => {ActiveTimer(e)}}>click</button>
        </form>
        
        
      </Window>
    );
  }
  
  