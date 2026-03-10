import { motion } from 'framer-motion';
import { WHATSAPP_URL, SOCIAL_LINKS } from '../constants';

const Footer = () => {
    const services = [
        'Meta Ads (FB & IG)',
        'Google Maps & Local SEO',
        'Funnel Building',
        'Creative Strategy',
    ];

    const quickLinks = [
        { label: 'Services', href: '#services' },
        { label: 'Process', href: '#process' },
        { label: 'Results', href: '#results' },
        { label: 'FAQ', href: '#faq' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer className="relative border-t border-gray-800 bg-surface/30">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-lime/30 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-8">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12 md:mb-16">
                    {/* Brand Column */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="text-2xl font-bold mb-4">
                            <span className="text-neon-lime">Growth</span> Experts
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-[280px]">
                            We engineer psychology-driven systems that scale revenue. No guesswork — just cold, hard ROAS.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {/* Instagram */}
                            <a
                                href={SOCIAL_LINKS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/[0.05] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-neon-lime hover:border-neon-lime/30 transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.5a1 1 0 110 2 1 1 0 010-2z" />
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/[0.05] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-neon-lime hover:border-neon-lime/30 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            {/* Twitter/X */}
                            <a
                                href={SOCIAL_LINKS.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/[0.05] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-neon-lime hover:border-neon-lime/30 transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* WhatsApp */}
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/[0.05] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#25D366] hover:border-[#25D366]/30 transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-gray-400 hover:text-neon-lime text-sm transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</h4>
                        <ul className="space-y-2.5">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="text-gray-400 text-sm">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Column */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Get Started</h4>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Ready to turn your ad spend into real profit?
                        </p>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-neon-lime/10 border border-neon-lime/20 text-neon-lime font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-neon-lime/20 hover:border-neon-lime/40 transition-all duration-300"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Free Audit
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
                        © 2026 Growth Experts. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs text-center md:text-right">
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
            </div>
        </footer>
    );
};

export default Footer;
