import React from "react";
import { useState, useEffect } from "react";

export default function Window({ children, windowTitle }) {
  const [clicking, setClicking] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setMousePosition((pos) => {
      return { x: pos.x + e.movementX, y: pos.y + e.movementY };
    });
  }

  useEffect(() => {
    console.log("clicking changed to", clicking);
    if (clicking) {
      window.addEventListener("mouseup", (e) => {
        console.log("mouseup");
        setClicking(false);
      });
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", null);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", null);
    };
  }, [clicking]);

  return (
    <div
      className="card window"
      style={{ top: mousePosition.y, left: mousePosition.x }}
    >
      <div
        className="title-bar"
        onMouseDown={(e) => {
          setClicking(true);
        }}
        onMouseUp={(e) => {
          setClicking(false);
        }}
      >
        <div className="d-flex justify-content-between">
          <div className="window-icon">
            <span
              style={{
                backgroundImage: `url(${"https://img.icons8.com/ios/50/000000/react-native.png"})`,
                height: "100%",
                width: "100%",
              }}
            ></span>
          </div>
          {/* <h3 className="title-bar-text">{windowTitle}</h3> */}
          <div className="title-bar-text">{windowTitle}</div>
          <div className="titlebar-controls">
            <button >_</button>
            <button >X</button>
          </div>
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}
