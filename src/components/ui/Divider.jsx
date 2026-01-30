import React from 'react';
import { colors } from '../../styles/colors';

export const Divider = () => (
    <div style={{
        width: '100%',
        height: '1px',
        background: `linear-gradient(90deg, transparent 0%, ${colors.silverDark} 20%, ${colors.silver}40 50%, ${colors.silverDark} 80%, transparent 100%)`,
        position: 'relative',
        zIndex: 1
    }} />
);
