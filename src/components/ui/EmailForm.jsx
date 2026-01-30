import React from 'react';
import { colors } from '../../styles/colors';

export const EmailForm = ({ email, setEmail, onSubmit, isSubmitted, variant = 'default' }) => {
    if (isSubmitted) {
        return (
            <div style={{
                display: variant === 'center' ? 'inline-block' : 'block',
                padding: variant === 'center' ? '24px 48px' : '24px 32px',
                background: 'rgba(139, 154, 125, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: variant === 'center' ? '16px' : '14px',
                border: `1px solid ${colors.olive}40`,
                maxWidth: variant === 'center' ? 'none' : '440px'
            }}>
                <p style={{ margin: 0, fontSize: '14px', color: colors.olive }}>
                    Thank you. We'll be in touch soon.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} style={{
            display: variant === 'center' ? 'inline-flex' : 'flex',
            gap: '12px',
            marginBottom: variant === 'center' ? 0 : '16px',
            padding: '6px',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: variant === 'center' ? '16px' : '14px',
            border: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={variant === 'center' ? 'Your email' : 'Enter your email'}
                style={{
                    flex: variant === 'center' ? 'none' : 1,
                    width: variant === 'center' ? '260px' : 'auto',
                    padding: variant === 'center' ? '18px 24px' : '16px 20px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderRadius: variant === 'center' ? '12px' : '10px',
                    fontSize: '14px',
                    color: colors.white,
                    outline: 'none'
                }}
            />
            <button type="submit" style={{
                padding: variant === 'center' ? '18px 40px' : '16px 32px',
                background: `linear-gradient(135deg, ${colors.olive} 0%, ${colors.oliveLight} 100%)`,
                color: colors.bg,
                border: 'none',
                borderRadius: variant === 'center' ? '12px' : '10px',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: variant === 'center' ? '0.06em' : '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                boxShadow: `0 ${variant === 'center' ? '12px 40px' : '8px 32px'} ${colors.olive}${variant === 'center' ? '50' : '40'}`
            }}>
                {variant === 'center' ? 'Request Access' : 'Join'}
            </button>
        </form>
    );
};
