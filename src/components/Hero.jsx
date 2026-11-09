import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../constants';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 px-4">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-black"></div>

            {/* Floating glow orbs - smaller on mobile */}
            <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-neon-lime/10 rounded-full blur-[80px] md:blur-[100px] motion-safe:animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-36 md:w-72 h-36 md:h-72 bg-neon-lime/5 rounded-full blur-[60px] md:blur-[80px] motion-safe:animate-pulse delay-1000"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Stop Donating Money to{' '}
                    <span className="text-neon-lime glow-text">Mark Zuckerberg.</span>
                    <br />
                    Turn Attention Into Profit.
                </motion.h1>

                <motion.h2
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Most agencies just run ads. We engineer psychology-driven systems that scale revenue.
                    No guesswork, no vanity metrics—just cold, hard <span className="text-white font-semibold">ROAS</span>.
                </motion.h2>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-neon-lime text-black font-bold text-base md:text-lg px-6 md:px-8 py-3.5 md:py-4 rounded-lg hover:bg-neon-lime/90 transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)]"
                    >
                        Get My Free Audit
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </a>

                    <a href="#/results" className="text-gray-300 underline underline-offset-4 hover:text-neon-lime transition-colors duration-300 text-sm md:text-base">
                        See our results
                    </a>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-black to-transparent"></div>
        </section>
    );
};

export default Hero;
