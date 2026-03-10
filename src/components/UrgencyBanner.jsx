import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_URL } from '../constants';

const UrgencyBanner = () => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-neon-lime/20 via-neon-lime/10 to-neon-lime/20 border-b border-neon-lime/30 backdrop-blur-sm"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="max-w-6xl mx-auto px-3 md:px-4 py-2 md:py-2.5 flex items-center justify-center gap-2 md:gap-4">
                        <p className="text-xs md:text-base text-center leading-snug">
                            <span className="mr-1 md:mr-2">🔥</span>
                            <span className="text-white font-medium">Only taking 5 new clients this month</span>
                            <span className="text-gray-400 mx-1 md:mx-2">—</span>
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neon-lime font-bold underline underline-offset-2 hover:text-white transition-colors"
                            >
                                Book now
                            </a>
                        </p>
                        <button
                            onClick={() => setVisible(false)}
                            className="text-gray-400 hover:text-white transition-colors shrink-0"
                            aria-label="Close banner"
                        >
                            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default UrgencyBanner;
