import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Comparison from './components/Comparison';
import Process from './components/Process';
import Services from './components/Services';
import FinalCTA from './components/FinalCTA';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import UrgencyBanner from './components/UrgencyBanner';
import AIAssistant from './components/AIAssistant';

function App() {
    return (
        <div className="bg-deep-black min-h-screen">
            {/* Global overlays */}
            <ParticleBackground />
            <CursorGlow />
            <UrgencyBanner />
            <Navbar />
            <FloatingWhatsApp />
            <AIAssistant />

            {/* Page sections */}
            <Hero />
            <Marquee />
            <Comparison />
            <Process />
            <Services />
            <FinalCTA />

            {/* Footer */}
            <footer className="py-8 px-4 md:px-6 border-t border-gray-800">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-xl md:text-2xl font-bold">
                        <span className="text-neon-lime">Growth</span> Experts
                    </div>
                    <p className="text-gray-500 text-xs md:text-sm text-center md:text-right">
                        © 2026 Growth Experts. All rights reserved. <br className="md:hidden" />
                        <span className="hidden md:inline"> | </span>
                        Developed by{' '}
                        <a
                            href="https://www.linkedin.com/in/aazibtariq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-neon-lime transition-colors duration-300 font-semibold"
                        >
                            Aazib Tariq
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
