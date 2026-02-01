import React from 'react';
import { colors } from '../../styles/colors';
import { EmailForm } from '../ui/EmailForm';
import { useMousePosition } from '../../hooks/useMousePosition';

export const HeroSection = ({ email, setEmail, onSubmit, isSubmitted }) => {
    const mousePos = useMousePosition();

    return (
        <section style={{
            padding: '80px 64px 140px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            minHeight: '85vh',
            position: 'relative',
            zIndex: 1
        }}>
            <div>
                <p style={{
                    fontSize: '11px',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: colors.pink,
                    marginBottom: '40px',
                    fontWeight: '500'
                }}>
                    The Future of Nourishment
                </p>

                <h1 style={{ marginBottom: '48px' }}>
                    <span style={{
                        display: 'block',
                        fontSize: '68px',
                        fontWeight: '400',
                        letterSpacing: '-0.04em',
                        lineHeight: '1',
                        color: colors.white
                    }}>Elevated eating,</span>
                    <span style={{
                        display: 'block',
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: '72px',
                        fontWeight: '400',
                        fontStyle: 'italic',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.2',
                        marginTop: '8px',
                        background: `linear-gradient(90deg, ${colors.silverLight} 0%, ${colors.silver} 25%, ${colors.silverLight} 50%, ${colors.silver} 75%, ${colors.silverLight} 100%)`,
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'shimmer 8s linear infinite'
                    }}>intelligently priced.</span>
                </h1>

                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.85',
                    color: colors.silverMuted,
                    maxWidth: '440px',
                    marginBottom: '56px'
                }}>
                    Sauté brings together chef-quality recipes and real-time price intelligence.
                    Experience the luxury of eating well—thoughtfully, sustainably, accessibly.
                </p>

                <div style={{ maxWidth: '440px' }}>
                    <EmailForm
                        email={email}
                        setEmail={setEmail}
                        onSubmit={onSubmit}
                        isSubmitted={isSubmitted}
                    />
                    {!isSubmitted && (
                        <p style={{ fontSize: '12px', color: colors.silverDark, marginLeft: '8px' }}>
                            Early access opens Spring 2026
                        </p>
                    )}
                </div>
            </div>

            {/* Right side - Glass cards */}
            <div style={{ position: 'relative', height: '620px' }}>
                {/* Main glass card - Salmon */}
                <div style={{
                    position: 'absolute',
                    top: '0%',
                    right: '0%',
                    width: '280px',
                    padding: '24px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                    backdropFilter: 'blur(40px)',
                    WebkitBackdropFilter: 'blur(40px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                    transform: `translate(${mousePos.x * 0.008}px, ${mousePos.y * 0.008}px)`,
                    transition: 'transform 0.4s ease-out',
                    zIndex: 2
                }}>
                    <div style={{
                        width: '100%',
                        height: '160px',
                        borderRadius: '16px',
                        marginBottom: '20px',
                        overflow: 'hidden'
                    }}>
                        <img 
                            src={import.meta.env.BASE_URL + 'salmon.png'} 
                            alt="Miso Glazed Salmon"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <p style={{ fontSize: '10px', color: colors.silverMuted, marginBottom: '6px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Today</p>
                    <p style={{ fontSize: '17px', fontWeight: '500', color: colors.white, marginBottom: '14px', letterSpacing: '-0.01em' }}>
                        Miso Glazed Salmon
                    </p>
                    <div style={{ display: 'flex', gap: '18px' }}>
                        <div>
                            <p style={{ fontSize: '20px', fontWeight: '500', color: colors.olive }}>$8.40</p>
                            <p style={{ fontSize: '9px', color: colors.silverMuted, letterSpacing: '0.05em' }}>per serving</p>
                        </div>
                        <div style={{ width: '1px', background: `linear-gradient(180deg, transparent, ${colors.silverDark}, transparent)` }} />
                        <div>
                            <p style={{
                                fontSize: '20px',
                                fontWeight: '500',
                                background: `linear-gradient(135deg, ${colors.silverLight} 0%, ${colors.silver} 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>540</p>
                            <p style={{ fontSize: '9px', color: colors.silverMuted, letterSpacing: '0.05em' }}>calories</p>
                        </div>
                    </div>
                </div>

                {/* Second recipe card - Truffle Pasta */}
                <div style={{
                    position: 'absolute',
                    top: '38%',
                    left: '5%',
                    width: '260px',
                    padding: '22px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    backdropFilter: 'blur(40px)',
                    WebkitBackdropFilter: 'blur(40px)',
                    borderRadius: '22px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)',
                    transform: `translate(${mousePos.x * -0.01}px, ${mousePos.y * -0.01}px)`,
                    transition: 'transform 0.4s ease-out',
                    zIndex: 1
                }}>
                    <div style={{
                        width: '100%',
                        height: '140px',
                        borderRadius: '14px',
                        marginBottom: '18px',
                        overflow: 'hidden',
                        background: `linear-gradient(145deg, ${colors.pink}20 0%, ${colors.pinkMuted}10 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                        <span style={{ fontSize: '48px' }}>🍝</span>
                    </div>
                    <p style={{ fontSize: '9px', color: colors.silverMuted, marginBottom: '6px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Tomorrow</p>
                    <p style={{ fontSize: '16px', fontWeight: '500', color: colors.white, marginBottom: '12px', letterSpacing: '-0.01em' }}>
                        Truffle Mushroom Pasta
                    </p>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <div>
                            <p style={{ fontSize: '18px', fontWeight: '500', color: colors.olive }}>$6.20</p>
                            <p style={{ fontSize: '9px', color: colors.silverMuted, letterSpacing: '0.05em' }}>per serving</p>
                        </div>
                        <div style={{ width: '1px', background: `linear-gradient(180deg, transparent, ${colors.silverDark}, transparent)` }} />
                        <div>
                            <p style={{
                                fontSize: '18px',
                                fontWeight: '500',
                                background: `linear-gradient(135deg, ${colors.silverLight} 0%, ${colors.silver} 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>680</p>
                            <p style={{ fontSize: '9px', color: colors.silverMuted, letterSpacing: '0.05em' }}>calories</p>
                        </div>
                    </div>
                </div>

                {/* Metallic stat card */}
                <div style={{
                    position: 'absolute',
                    top: '22%',
                    left: '0%',
                    padding: '24px 32px',
                    background: `linear-gradient(145deg, rgba(192, 192, 192, 0.12) 0%, rgba(192, 192, 192, 0.04) 100%)`,
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    borderRadius: '18px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
                    transform: `translate(${mousePos.x * -0.012}px, ${mousePos.y * -0.012}px)`,
                    transition: 'transform 0.4s ease-out',
                    zIndex: 0
                }}>
                    <p style={{
                        fontSize: '42px',
                        fontWeight: '400',
                        letterSpacing: '-0.03em',
                        marginBottom: '4px',
                        background: `linear-gradient(180deg, ${colors.silverLight} 0%, ${colors.silver} 50%, ${colors.silverMuted} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>40%</p>
                    <p style={{ fontSize: '10px', color: colors.silverMuted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>average savings</p>
                </div>

                {/* Olive accent tag */}
                <div style={{
                    position: 'absolute',
                    bottom: '5%',
                    right: '25%',
                    padding: '10px 20px',
                    background: `linear-gradient(135deg, ${colors.olive} 0%, ${colors.oliveMuted} 100%)`,
                    borderRadius: '100px',
                    boxShadow: `0 12px 32px ${colors.olive}40`,
                    transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * -0.015}px)`,
                    transition: 'transform 0.4s ease-out'
                }}>
                    <p style={{ margin: 0, fontSize: '11px', fontWeight: '600', color: colors.white, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Chef Quality</p>
                </div>
            </div>
        </section>
    );
};
