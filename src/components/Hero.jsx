import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 px-4">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-black"></div>

            {/* Floating glow orbs - smaller on mobile */}
            <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-neon-lime/10 rounded-full blur-[80px] md:blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-36 md:w-72 h-36 md:h-72 bg-neon-lime/5 rounded-full blur-[60px] md:blur-[80px] animate-pulse delay-1000"></div>

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
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed"
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
                        href="https://wa.me/923186725593?text=Hi%20Growth%20Experts,%20I%20saw%20your%20website.%20I'm%20interested%20in%20scaling%20my%20business%20with%20your%20ads%20strategy."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto text-center bg-neon-lime text-black font-bold text-base md:text-lg px-6 md:px-8 py-3.5 md:py-4 rounded-lg hover:bg-neon-lime/90 transition-all duration-300 shadow-[0_0_15px_#39FF14] animate-pulse-glow"
                    >
                        Get My Free Audit ➔
                    </a>

                    <a href="#results" className="text-white underline underline-offset-4 hover:text-neon-lime transition-colors duration-300 text-sm md:text-base">
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
