import React, { useState } from 'react';
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) setIsSubmitted(true);
    };

    return (
        <>
            <AmbientGlows />
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
        </>
    );
};

export default App;
