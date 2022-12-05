import React from "react";
import { useRef } from "react";
import { useState, useEffect, useContext } from "react";
import { AppsInUseContext } from "../contexts/AppsInUseContext";

export default function Window({ children, windowTitle, setWindowOffset, id, position }) {
  const [clicking, setClicking] = useState(false);
  const [windowID, setWindowID] = useState()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const windowRef = useRef()
  const windowHeadRef = useRef()   
  const {getIDForNewWindow, closeApp: close} = useContext(AppsInUseContext)

  function handleMouseMove(e) {
    setMousePosition((pos) => {
      return { x: pos.x + e.movementX, y: pos.y + e.movementY };
    });
    if (setWindowOffset)
    setWindowOffset({x: windowRef.current.offsetLeft,
      y: windowRef.current.offsetTop + windowHeadRef.current.clientHeight,})
  }

  function handleMouseUp() {

      console.log("mouseup");
      setClicking(false);
    
  }

  useEffect(() => {
    let intervall
    if (!windowID) {
    intervall = setInterval(() => {
      let id = getIDForNewWindow()
      if (id) {
        setWindowID(id)
        clearInterval(intervall)
      }
    }, 10)}
    else {
      clearInterval(intervall)
    }
  })

  useEffect(() => {
    if (setWindowOffset)
    setWindowOffset({x: windowRef.current.offsetLeft,
      y: windowRef.current.offsetTop + windowHeadRef.current.clientHeight,})
    if (clicking) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicking]);
  useEffect(() => {
    if (position)
    setMousePosition(position)
  },[position])

  return (
    <div
      className="card window"
      style={{ top: mousePosition.y, left: mousePosition.x }}
      ref={windowRef}
    >
      <div
        className="title-bar"
        onMouseDown={(e) => {
          setClicking(true);
        }}
        onMouseUp={(e) => {
          setClicking(false);
        }}
        ref={windowHeadRef}
      >
        
          {/* <h3 className="title-bar-text">{windowTitle}</h3> */}
          <div className="title-bar-text">{windowTitle}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close" onClick={() => {close(windowID)}}></button>
          </div>
        
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}
