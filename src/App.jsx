import React, { useState, useEffect, useRef } from 'react';
import './styles/index.css';
import { AmbientGlows } from './components/effects/AmbientGlows';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { QuoteSection } from './components/sections/QuoteSection';
import { StatsSection } from './components/sections/StatsSection';
import { CTASection } from './components/sections/CTASection';
import { Divider } from './components/ui/Divider';

const App = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const contentRef = useRef(null);
    const currentY = useRef(0);
    const targetY = useRef(0);
    const animationRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) setIsSubmitted(true);
    };

    // Smooth scroll with inertia like Titan.com
    useEffect(() => {
        const ease = 0.075; // Lower = more drag/delay

        const handleScroll = () => {
            targetY.current = window.scrollY;
        };

        const animate = () => {
            const diff = targetY.current - currentY.current;
            currentY.current += diff * ease;

            if (contentRef.current) {
                // Apply smooth transform offset
                const offset = targetY.current - currentY.current;
                contentRef.current.style.transform = `translate3d(0, ${-offset}px, 0)`;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <>
            <AmbientGlows />
            <div ref={contentRef} style={{ willChange: 'transform' }}>
                <Navigation />
                <HeroSection
                    email={email}
                    setEmail={setEmail}
                    onSubmit={handleSubmit}
                    isSubmitted={isSubmitted}
                />
                <Divider />
                <FeaturesSection />
                <QuoteSection />
                <StatsSection />
                <CTASection
                    email={email}
                    setEmail={setEmail}
                    onSubmit={handleSubmit}
                    isSubmitted={isSubmitted}
                />
                <Footer />
            </div>
        </>
    );
};

export default App;
