import React, { Suspense, useState, useEffect } from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Comparison from './components/Comparison';
import Process from './components/Process';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import UrgencyBanner from './components/UrgencyBanner';

// Lazy load heavy components
const ParticleBackground = React.lazy(() => import('./components/ParticleBackground'));
const AIAssistant = React.lazy(() => import('./components/AIAssistant'));

function App() {
    const [currentPath, setCurrentPath] = useState(window.location.hash);

    useEffect(() => {
        const onHashChange = () => setCurrentPath(window.location.hash);
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    const isResultsPage = currentPath === '#/results';

    return (
        <div className="bg-deep-black min-h-screen">
            <LoadingScreen />

            {/* Global overlays */}
            <Suspense fallback={null}>
                <ParticleBackground />
            </Suspense>
            <CursorGlow />
            <UrgencyBanner />
            <Navbar />
            <FloatingWhatsApp />
            <Suspense fallback={null}>
                <AIAssistant />
            </Suspense>

            {/* Page sections */}
            {isResultsPage ? (
                <div className="pt-24 min-h-screen relative z-10 flex flex-col">
                    <Portfolio />
                    <Testimonials />
                    <div className="mt-auto">
                        <Footer />
                    </div>
                </div>
            ) : (
                <>
                    <Hero />
                    <Marquee />
                    <Comparison />
                    <div id="process">
                        <Process />
                    </div>
                    <div id="services">
                        <Services />
                    </div>
                    <div id="faq">
                        <FAQ />
                    </div>
                    <FinalCTA />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
