import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Comparison from './components/Comparison';
import Process from './components/Process';
import Services from './components/Services';
import FinalCTA from './components/FinalCTA';

function App() {
    return (
        <div className="bg-deep-black min-h-screen">
            <Hero />
            <Marquee />
            <Comparison />
            <Process />
            <Services />
            <FinalCTA />

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-gray-800">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-2xl font-bold">
                        <span className="text-neon-lime">Growth</span> Experts
                    </div>
                    <p className="text-gray-500 text-sm">
                        © 2026 Growth Experts. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
