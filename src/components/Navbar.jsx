import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {scrolled && (
                <motion.nav
                    className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 py-3 md:py-4"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    <div className="max-w-6xl mx-auto flex items-center justify-between bg-surface/70 backdrop-blur-xl border border-gray-800/50 rounded-2xl px-4 md:px-6 py-2.5 md:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                        <div className="text-lg md:text-xl font-bold">
                            <span className="text-neon-lime">Growth</span> Experts
                        </div>
                        <a
                            href="https://wa.me/923186725593?text=Hi%20Growth%20Experts,%20I%20saw%20your%20website.%20I'm%20interested%20in%20scaling%20my%20business%20with%20your%20ads%20strategy."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-neon-lime text-black font-bold text-xs md:text-sm px-3 md:px-5 py-2 md:py-2.5 rounded-lg hover:bg-neon-lime/90 transition-all duration-300 shadow-[0_0_10px_rgba(57,255,20,0.3)]"
                        >
                            Free Audit ➔
                        </a>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default Navbar;
