import React from 'react';
import { colors } from '../../styles/colors';

export const AmbientGlows = () => (
    <>
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
