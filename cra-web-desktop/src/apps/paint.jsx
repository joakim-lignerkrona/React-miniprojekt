import { offset } from "@popperjs/core";
import { useState, useRef, useEffect } from "react";
import Window from "../window/Window";

export default function Paint() {
  const [mouseData, setMouseData] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const [canvasCTX, setCanvasCTX] = useState(null);
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState(10);
  const [width, setWidth] = useState(1000);
  const [heigth, setHeigth] = useState(1000);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = heigth;
    setCanvasCTX(ctx);
  }, [canvasRef]);

  const SetPos = (e) => {
    console.log(canvasRef);
    setMouseData({
      x: e.pageX + canvasRef.current.offsetTop,
      y: e.pageY + canvasRef.current.offsetLeft,
    });
  };

  const Draw = (e) => {
    if (e.buttons !== 1) return;
    const ctx = canvasCTX;
    ctx.beginPath();
    ctx.moveTo(mouseData.x, mouseData.y);
    ctx.lineTo(
      e.clientX + canvasRef.current.offsetTop,
      e.clientY + canvasRef.current.offsetLeft
    );
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    // Set the line cap to round
    ctx.lineCap = "round";
    ctx.stroke();
    console.log(e);
  };

  return (
    <Window windowTitle={"MS Paint.exe"}>
      <input type="text" />
      <button className="btn btn-primary">click</button>
      <canvas
        ref={canvasRef}
        onMouseEnter={(e) => SetPos(e)}
        onMouseMove={(e) => {
          SetPos(e);
          Draw(e);
        }}
        onMouseDown={(e) => SetPos(e)}
      ></canvas>

      <div
        className="controlpanel"
        style={{
          position: "absolute",
          top: "6%",
          left: "0",
          width: "5%",
        }}
      >
        <input
          type="range"
          value={size}
          max={40}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />

        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const ctx = canvasCTX;
            ctx.clearRect(
              0,
              0,
              canvasRef.current.width,
              canvasRef.current.height
            );
          }}
        >
          Clear
        </button>
      </div>
    </Window>
  );
}
