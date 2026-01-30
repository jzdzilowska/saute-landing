import React, { useState } from 'react';
import { colors } from '../../styles/colors';
import { features } from '../../data/features';

export const FeaturesSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section style={{
            padding: '140px 64px',
            position: 'relative',
            zIndex: 1
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ marginBottom: '80px', maxWidth: '650px' }}>
                    <p style={{
                        fontSize: '11px',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: colors.olive,
                        marginBottom: '32px',
                        fontWeight: '500'
                    }}>
                        The Method
                    </p>
                    <h2>
                        <span style={{
                            fontSize: '44px',
                            fontWeight: '400',
                            letterSpacing: '-0.03em',
                            color: colors.white,
                            lineHeight: '1.2'
                        }}>Four principles guide </span>
                        <span style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: '48px',
                            fontStyle: 'italic',
                            background: `linear-gradient(90deg, ${colors.silverLight} 0%, ${colors.silver} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>everything we do.</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '20px'
                }}>
                    {features.map((feature, index) => {
                        const isActive = activeFeature === index;
                        const accentColor = feature.color === 'olive' ? colors.olive :
                            feature.color === 'pink' ? colors.pink : colors.silver;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveFeature(index)}
                                style={{
                                    padding: '48px',
                                    background: isActive
                                        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)'
                                        : 'rgba(255, 255, 255, 0.02)',
                                    backdropFilter: isActive ? 'blur(40px)' : 'blur(20px)',
                                    WebkitBackdropFilter: isActive ? 'blur(40px)' : 'blur(20px)',
                                    border: `1px solid ${isActive ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.04)'}`,
                                    borderRadius: '24px',
                                    cursor: 'pointer',
                                    transition: 'all 0.5s ease',
                                    boxShadow: isActive ? `0 20px 60px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)` : 'none'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                                    <span style={{
                                        padding: '8px 16px',
                                        background: isActive ? `${accentColor}20` : 'rgba(255,255,255,0.05)',
                                        borderRadius: '100px',
                                        fontSize: '11px',
                                        letterSpacing: '0.1em',
                                        color: isActive ? accentColor : colors.silverMuted,
                                        fontWeight: '500',
                                        transition: 'all 0.4s ease'
                                    }}>{feature.num}</span>
                                    <div style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        background: isActive ? `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}80 100%)` : 'transparent',
                                        border: `1px solid ${isActive ? accentColor : colors.silverDark}`,
                                        boxShadow: isActive ? `0 0 20px ${accentColor}60` : 'none',
                                        transition: 'all 0.4s ease'
                                    }} />
                                </div>
                                <h3 style={{
                                    fontSize: '26px',
                                    fontWeight: '400',
                                    letterSpacing: '-0.02em',
                                    color: colors.white,
                                    marginBottom: '16px'
                                }}>{feature.title}</h3>
                                <p style={{
                                    fontSize: '15px',
                                    lineHeight: '1.7',
                                    color: colors.silverMuted
                                }}>{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
