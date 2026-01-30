import React from 'react';
import { colors } from '../../styles/colors';

export const Footer = () => (
    <footer style={{
        padding: '40px 64px',
        borderTop: `1px solid ${colors.bgCard}`,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
    }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{
                fontSize: '18px',
                fontWeight: '500',
                background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.silver} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>sauté</span>
            <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '9px',
                fontStyle: 'italic',
                color: colors.pink
            }}>®</span>
        </div>
        <div style={{ display: 'flex', gap: '36px', justifyContent: 'center', fontSize: '12px', color: colors.silverMuted }}>
            <span style={{ cursor: 'pointer' }}>Instagram</span>
            <span style={{ cursor: 'pointer' }}>Privacy</span>
            <span style={{ cursor: 'pointer' }}>Terms</span>
        </div>
        <p style={{ fontSize: '11px', color: colors.silverDark, textAlign: 'right' }}>
            © 2026 Sauté. All rights reserved.
        </p>
    </footer>
);
