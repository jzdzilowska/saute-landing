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
                {/* Main glass card */}
                <div style={{
                    position: 'absolute',
                    top: '5%',
                    right: '5%',
                    width: '300px',
                    padding: '28px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                    backdropFilter: 'blur(40px)',
                    WebkitBackdropFilter: 'blur(40px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                    transform: `translate(${mousePos.x * 0.008}px, ${mousePos.y * 0.008}px)`,
                    transition: 'transform 0.4s ease-out'
                }}>
                    <div style={{
                        width: '100%',
                        height: '180px',
                        background: `linear-gradient(145deg, ${colors.pink}30 0%, ${colors.pinkMuted}20 100%)`,
                        borderRadius: '16px',
                        marginBottom: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            left: '-50%',
                            width: '200%',
                            height: '200%',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
                            transform: 'rotate(-45deg)'
                        }} />
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${colors.pink} 0%, ${colors.pinkDark} 100%)`,
                            boxShadow: `0 8px 32px ${colors.pink}50`
                        }} />
                    </div>
                    <p style={{ fontSize: '10px', color: colors.silverMuted, marginBottom: '8px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Today</p>
                    <p style={{ fontSize: '18px', fontWeight: '500', color: colors.white, marginBottom: '16px', letterSpacing: '-0.01em' }}>
                        Miso Glazed Salmon
                    </p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div>
                            <p style={{ fontSize: '22px', fontWeight: '500', color: colors.olive }}>$8.40</p>
                            <p style={{ fontSize: '10px', color: colors.silverMuted, letterSpacing: '0.05em' }}>per serving</p>
                        </div>
                        <div style={{ width: '1px', background: `linear-gradient(180deg, transparent, ${colors.silverDark}, transparent)` }} />
                        <div>
                            <p style={{
                                fontSize: '22px',
                                fontWeight: '500',
                                background: `linear-gradient(135deg, ${colors.silverLight} 0%, ${colors.silver} 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>540</p>
                            <p style={{ fontSize: '10px', color: colors.silverMuted, letterSpacing: '0.05em' }}>calories</p>
                        </div>
                    </div>
                </div>

                {/* Metallic stat card */}
                <div style={{
                    position: 'absolute',
                    top: '58%',
                    left: '0%',
                    padding: '28px 36px',
                    background: `linear-gradient(145deg, rgba(192, 192, 192, 0.15) 0%, rgba(192, 192, 192, 0.05) 100%)`,
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.15)',
                    transform: `translate(${mousePos.x * -0.012}px, ${mousePos.y * -0.012}px)`,
                    transition: 'transform 0.4s ease-out'
                }}>
                    <p style={{
                        fontSize: '48px',
                        fontWeight: '400',
                        letterSpacing: '-0.03em',
                        marginBottom: '4px',
                        background: `linear-gradient(180deg, ${colors.silverLight} 0%, ${colors.silver} 50%, ${colors.silverMuted} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>40%</p>
                    <p style={{ fontSize: '11px', color: colors.silverMuted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>average savings</p>
                </div>

                {/* Pink glass orb */}
                <div style={{
                    position: 'absolute',
                    top: '12%',
                    left: '12%',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${colors.pink}40 0%, ${colors.pinkDark}20 100%)`,
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(212, 180, 176, 0.2)',
                    boxShadow: `0 20px 40px ${colors.pink}20, inset 0 1px 0 rgba(255,255,255,0.2)`,
                    transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
                    transition: 'transform 0.4s ease-out',
                    animation: 'float 6s ease-in-out infinite'
                }} />

                {/* Silver glass orb */}
                <div style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '15%',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(192,192,192,0.1) 100%)`,
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
                    transform: `translate(${mousePos.x * -0.015}px, ${mousePos.y * 0.015}px)`,
                    transition: 'transform 0.4s ease-out',
                    animation: 'float 5s ease-in-out infinite 1s'
                }} />

                {/* Olive accent tag */}
                <div style={{
                    position: 'absolute',
                    bottom: '38%',
                    left: '18%',
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
