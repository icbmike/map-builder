import React, { useEffect, useRef } from "react"
import { loadAllAssets } from "../assets";
import { configureCanvas } from "../createCanvas";
import { sprites } from "../data";
import { draw } from "../draw";
import { setupInputs } from "../inputs";

import "./Canvas.scss"

export const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if(canvasRef.current){
            const { ctx, cvs } = configureCanvas(canvasRef.current);
            
            sprites.sort((a, b) => b.position.z - a.position.z);
            
            setupInputs(cvs);
                
            // Define and start render loop
            const render = () => {
            requestAnimationFrame(() => {
                ctx.clearRect(0, 0, cvs.width, cvs.height);
                draw(ctx, sprites);
                
                render();
            });
            };
            
            loadAllAssets().then(() => {
            render();
            });
        }
    }, [canvasRef.current])

    return <canvas ref={canvasRef} className="canvas"></canvas>
}