import React from 'react';
import { colors } from '../../styles/colors';

export const QuoteSection = () => (
    <section style={{
        padding: '120px 64px',
        position: 'relative',
        zIndex: 1
    }}>
        <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '80px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            borderRadius: '32px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Glass reflection */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)',
                pointerEvents: 'none'
            }} />

            <div style={{
                width: '48px',
                height: '2px',
                background: `linear-gradient(90deg, ${colors.pink}, ${colors.pinkLight})`,
                margin: '0 auto 48px',
                borderRadius: '1px'
            }} />
            <blockquote style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '34px',
                fontWeight: '400',
                fontStyle: 'italic',
                lineHeight: '1.5',
                color: colors.silverLight,
                marginBottom: '48px',
                position: 'relative'
            }}>
                "The intersection of quality and accessibility shouldn't be a luxury.
                It should be the standard."
            </blockquote>
            <p style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: colors.pink
            }}>
                — Founding Principle
            </p>
        </div>
    </section>
);
