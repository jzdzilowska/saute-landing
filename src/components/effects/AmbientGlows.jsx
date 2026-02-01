import React, { useEffect, useRef } from 'react';
import { colors } from '../../styles/colors';

export const AmbientGlows = () => {
    const canvasRef = useRef(null);

    // Slowly moving grain illumination
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Generate static grain pattern once
        const grainCanvas = document.createElement('canvas');
        const grainCtx = grainCanvas.getContext('2d');
        grainCanvas.width = 256;
        grainCanvas.height = 256;
        
        const grainData = grainCtx.createImageData(256, 256);
        for (let i = 0; i < grainData.data.length; i += 4) {
            const noise = Math.random();
            if (noise > 0.92) {
                grainData.data[i] = 212;     // R (pale pink)
                grainData.data[i + 1] = 180; // G
                grainData.data[i + 2] = 176; // B
                grainData.data[i + 3] = Math.random() * 25 + 8;
            }
        }
        grainCtx.putImageData(grainData, 0, 0);

        const drawFrame = () => {
            time += 0.001; // Even slower movement

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Create moving illumination spots - very subtle
            const gradient1X = Math.sin(time * 0.3) * canvas.width * 0.4 + canvas.width * 0.3;
            const gradient1Y = Math.cos(time * 0.2) * canvas.height * 0.4 + canvas.height * 0.3;
            
            const gradient2X = Math.cos(time * 0.25) * canvas.width * 0.4 + canvas.width * 0.7;
            const gradient2Y = Math.sin(time * 0.35) * canvas.height * 0.4 + canvas.height * 0.5;

            // Draw very soft illumination gradients
            const drawGlow = (x, y, radius, opacity) => {
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
                gradient.addColorStop(0, `rgba(212, 180, 176, ${opacity})`);
                gradient.addColorStop(0.6, `rgba(212, 180, 176, ${opacity * 0.2})`);
                gradient.addColorStop(1, 'rgba(212, 180, 176, 0)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            };

            drawGlow(gradient1X, gradient1Y, 500, 0.06);
            drawGlow(gradient2X, gradient2Y, 450, 0.05);

            // Very subtle grain overlay
            ctx.globalAlpha = 0.15;
            const pattern = ctx.createPattern(grainCanvas, 'repeat');
            ctx.fillStyle = pattern;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1;

            animationId = requestAnimationFrame(drawFrame);
        };

        drawFrame();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            {/* Slowly moving grain illumination overlay */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 1,
                    opacity: 0.8
                }}
            />

            <div style={{
                position: 'fixed',
                top: '-10%',
                right: '-5%',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${colors.pink}20 0%, transparent 70%)`,
                filter: 'blur(80px)',
                pointerEvents: 'none',
                zIndex: 0,
                animation: 'glow 8s ease-in-out infinite'
            }} />
            <div style={{
                position: 'fixed',
                bottom: '-10%',
                left: '-10%',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${colors.olive}15 0%, transparent 70%)`,
                filter: 'blur(80px)',
                pointerEvents: 'none',
                zIndex: 0,
                animation: 'glow 10s ease-in-out infinite 2s'
            }} />
            <div style={{
                position: 'fixed',
                top: '40%',
                left: '50%',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${colors.silver}10 0%, transparent 70%)`,
                filter: 'blur(100px)',
                pointerEvents: 'none',
                zIndex: 0
            }} />
        </>
    );
};
