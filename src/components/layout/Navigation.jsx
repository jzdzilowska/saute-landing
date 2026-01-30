import React from 'react';
import { colors } from '../../styles/colors';

export const Navigation = () => (
    <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        margin: '20px 32px',
        position: 'relative',
        zIndex: 10,
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.06)'
    }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{
                fontSize: '24px',
                fontWeight: '500',
                letterSpacing: '-0.03em',
                background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.silver} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
            }}>sauté</span>
            <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '10px',
                fontStyle: 'italic',
                color: colors.pink
            }}>®</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <span style={{ fontSize: '13px', color: colors.silverMuted, cursor: 'pointer' }}>Philosophy</span>
            <span style={{ fontSize: '13px', color: colors.silverMuted, cursor: 'pointer' }}>Method</span>
            <button style={{
                padding: '12px 28px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                color: colors.white,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '500',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer'
            }}>
                Request Access
            </button>
        </div>
    </nav>
);
