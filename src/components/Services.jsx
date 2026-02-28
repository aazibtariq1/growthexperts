import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: 'Facebook Ads',
            description: 'Hyper-targeted campaigns that convert cold audiences into paying customers.',
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
            ),
        },
        {
            title: 'Instagram Ads',
            description: 'Visual storytelling that stops the scroll and drives action.',
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none" />
                </svg>
            ),
        },
        {
            title: 'Funnel Building',
            description: 'End-to-end conversion machines that maximize every click.',
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V21l-4-2v-4.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
            ),
        },
        {
            title: 'Creative Strategy',
            description: 'Psychology-driven content that makes audiences need to buy.',
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-16 md:py-24 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Our <span className="text-neon-lime">Services</span>
                </motion.h2>
                <motion.p
                    className="text-gray-400 text-center text-base md:text-lg mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Everything you need to scale profitably
                </motion.p>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-surface border border-gray-800 rounded-2xl p-6 md:p-8 overflow-hidden
                                hover:border-neon-lime transition-all duration-500
                                hover:shadow-[0_0_40px_rgba(57,255,20,0.2)]"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                        >
                            {/* Background glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="text-white mb-4 md:mb-6 group-hover:scale-110 group-hover:text-neon-lime transition-all duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-neon-lime transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {service.description}
                                </p>
                            </div>

                            {/* Corner accent */}
                            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-neon-lime/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
