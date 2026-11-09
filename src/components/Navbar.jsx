import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_URL, NAV_LINKS } from '../constants';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const handleNavClick = (e, href) => {
        if (href.startsWith('#/')) {
            setMobileOpen(false);
            return; // Let standard hash navigation occur
        }

        e.preventDefault();
        setMobileOpen(false);

        if (href.startsWith('/#')) {
            const targetId = href.replace('/#', '#');
            
            if (window.location.hash.startsWith('#/')) {
                window.location.hash = ''; // Go back to root
                setTimeout(() => {
                    const target = document.querySelector(targetId);
                    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            } else {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 px-3 md:px-6 transition-all duration-500 ${
                    scrolled ? 'py-2 md:py-3' : 'py-3 md:py-5'
                }`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <div className={`max-w-6xl mx-auto flex items-center justify-between rounded-2xl px-4 md:px-6 py-2.5 md:py-3 transition-all duration-500 ${
                    scrolled
                        ? 'bg-surface/80 backdrop-blur-xl border border-gray-800/50 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
                        : 'bg-transparent border border-transparent'
                }`}>
                    {/* Logo */}
                    <a href="#" onClick={() => { window.location.hash = ''; window.scrollTo({top: 0, behavior: 'smooth'}); }} className="flex items-center gap-2 shrink-0 group">
                        <img src="/logo-cropped.png" alt="Growth Experts" className="h-7 md:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                    </a>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-gray-400 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1.5 bg-neon-lime text-black font-bold text-xs md:text-sm px-3 md:px-5 py-2 md:py-2.5 rounded-lg hover:bg-neon-lime/90 transition-all duration-300 shadow-[0_0_10px_rgba(57,255,20,0.3)]"
                        >
                            Free Audit
                            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                className="block w-5 h-[2px] bg-white rounded-full origin-center"
                                animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="block w-5 h-[2px] bg-white rounded-full"
                                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                className="block w-5 h-[2px] bg-white rounded-full origin-center"
                                animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-deep-black/90 backdrop-blur-lg"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.div
                            className="relative flex flex-col items-center justify-center h-full gap-6 pt-20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            {NAV_LINKS.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-2xl font-semibold text-white hover:text-neon-lime transition-colors duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15 + index * 0.05 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}

                            <motion.a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group mt-4 inline-flex items-center gap-2 bg-neon-lime text-black font-bold text-lg px-8 py-3.5 rounded-xl shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                Get Free Audit
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
