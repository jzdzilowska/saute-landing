import React from 'react';
import { colors } from '../../styles/colors';
import { stats } from '../../data/features';

export const StatsSection = () => (
    <section style={{
        padding: '100px 64px',
        background: `linear-gradient(180deg, ${colors.bgLight} 0%, ${colors.bg} 100%)`,
        position: 'relative',
        zIndex: 1
    }}>
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '48px'
        }}>
            {stats.map((stat, index) => {
                const statColor = colors[stat.colorKey] || colors.white;

                return (
                    <div key={index}>
                        <p style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: '52px',
                            fontWeight: '400',
                            marginBottom: '12px',
                            background: stat.colorKey === 'white'
                                ? `linear-gradient(180deg, ${colors.white} 0%, ${colors.silver} 100%)`
                                : stat.colorKey === 'silverLight'
                                    ? `linear-gradient(180deg, ${colors.silverLight} 0%, ${colors.silver} 100%)`
                                    : `linear-gradient(180deg, ${statColor} 0%, ${statColor}99 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>{stat.num}</p>
                        <p style={{ fontSize: '13px', color: colors.silverMuted, letterSpacing: '0.03em' }}>{stat.label}</p>
                    </div>
                );
            })}
        </div>
    </section>
);
