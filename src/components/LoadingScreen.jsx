import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (you could tie this to real asset loading if needed)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[999] bg-deep-black flex flex-col items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="relative flex flex-col items-center">
                        {/* Outer rotating glow */}
                        <motion.div
                            className="absolute inset-0 w-32 h-32 rounded-full border-t-2 border-r-2 border-neon-lime/30"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Inner rotating glow */}
                        <motion.div
                            className="absolute inset-2 w-28 h-28 rounded-full border-b-2 border-l-2 border-neon-lime/60"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                        
                        {/* Logo text */}
                        <motion.div 
                            className="w-32 h-32 flex items-center justify-center text-center font-bold text-2xl"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-neon-lime">G</span>E
                        </motion.div>
                        
                        {/* Loading text */}
                        <motion.p
                            className="text-gray-400 mt-8 font-medium tracking-widest text-sm uppercase"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Initializing<span className="animate-pulse">...</span>
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
