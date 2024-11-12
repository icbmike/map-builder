import React, { useEffect, useRef } from "react"
import { sprites } from "../../data/data";
import { draw } from "./draw";
import { setupInputs } from "./inputs";

import "./Canvas.scss"
import { assets } from "~data/assets";

const configureCanvas = (cvs: HTMLCanvasElement) => {
    const dpr = window.devicePixelRatio || 1;

    const boundingRect = cvs.getBoundingClientRect()

    cvs.style.width = `${boundingRect.height}px`;

    cvs.width = cvs.getBoundingClientRect().width * dpr;
    cvs.height = cvs.getBoundingClientRect().height * dpr;
    
    const ctx = cvs.getContext('2d')!;

    ctx.scale(dpr, dpr);

    window.addEventListener('resize', () => {
        cvs.width = cvs.getBoundingClientRect().width * dpr;
        cvs.height = cvs.getBoundingClientRect().height * dpr;
        ctx.scale(dpr, dpr);
    })

    return { cvs, ctx };
}

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
                    draw(ctx, sprites, assets);
                    
                    render();
                });
            };
            
            render();
        }
    }, [canvasRef.current])

    return <canvas ref={canvasRef} className="canvas"></canvas>
}