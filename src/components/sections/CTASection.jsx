import React from 'react';
import { colors } from '../../styles/colors';
import { EmailForm } from '../ui/EmailForm';

export const CTASection = ({ email, setEmail, onSubmit, isSubmitted }) => (
    <section style={{
        padding: '160px 64px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
    }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '32px' }}>
                <span style={{
                    display: 'block',
                    fontSize: '44px',
                    fontWeight: '400',
                    letterSpacing: '-0.03em',
                    color: colors.white
                }}>Begin your journey</span>
                <span style={{
                    display: 'block',
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '50px',
                    fontStyle: 'italic',
                    marginTop: '8px',
                    background: `linear-gradient(90deg, ${colors.pink} 0%, ${colors.pinkLight} 50%, ${colors.pink} 100%)`,
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'shimmer 6s linear infinite'
                }}>with intention.</span>
            </h2>
            <p style={{
                fontSize: '16px',
                color: colors.silverMuted,
                marginBottom: '48px',
                lineHeight: '1.85'
            }}>
                Join our community of discerning individuals who believe that
                eating well is not a privilege—it's a practice.
            </p>

            <EmailForm
                email={email}
                setEmail={setEmail}
                onSubmit={onSubmit}
                isSubmitted={isSubmitted}
                variant="center"
            />
        </div>
    </section>
);
