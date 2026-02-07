import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated mesh background */}
            <div className="absolute inset-0 mesh-bg opacity-50"></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-black"></div>

            {/* Floating glow orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-lime/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neon-lime/5 rounded-full blur-[80px] animate-pulse delay-1000"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
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
                    className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Most agencies just run ads. We engineer psychology-driven systems that scale revenue.
                    No guesswork, no vanity metrics—just cold, hard <span className="text-white font-semibold">ROAS</span>.
                </motion.h2>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <a
                        href="https://wa.me/923186725593?text=Hi%20Growth%20Experts,%20I%20saw%20your%20website.%20I'm%20interested%20in%20scaling%20my%20business%20with%20your%20ads%20strategy."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-neon-lime text-black font-bold text-lg px-8 py-4 rounded-lg hover:bg-neon-lime/90 transition-all duration-300 shadow-[0_0_15px_#39FF14] animate-pulse-glow"
                    >
                        Get My Free Audit ➔
                    </a>

                    <a href="#results" className="text-white underline underline-offset-4 hover:text-neon-lime transition-colors duration-300">
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
