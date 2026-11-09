import { motion } from 'framer-motion';

const Testimonials = () => {
    const approaches = [
        {
            title: 'Psychology-Driven Creatives',
            description: 'We don\'t just make ads — we engineer scroll-stopping creatives based on consumer psychology principles that trigger the "need to buy" response.',
            icon: '🧠',
            highlight: 'Behavioral Targeting',
        },
        {
            title: 'Data-Backed Scaling',
            description: 'Every campaign decision is backed by real-time data. We kill underperformers fast and double down on what\'s printing money for your business.',
            icon: '📊',
            highlight: 'Real-Time Optimization',
        },
        {
            title: 'Full-Funnel Engineering',
            description: 'From the first ad impression to the final conversion — we build the entire customer journey, not just run ads and hope for the best.',
            icon: '⚡',
            highlight: 'End-to-End System',
        },
        {
            title: 'AI-Powered Lead Qualification',
            description: 'Our AI voice assistant qualifies leads 24/7 before they even reach your inbox — saving you time and ensuring you only talk to serious buyers.',
            icon: '🤖',
            highlight: 'Always-On Intelligence',
        },
        {
            title: 'Revenue-First Reporting',
            description: 'We don\'t report on likes and impressions. We track ROAS, cost per lead, and actual revenue generated — the only metrics that matter.',
            icon: '💰',
            highlight: 'No Vanity Metrics',
        },
        {
            title: 'Local Market Domination',
            description: 'For service-based businesses, we combine Google Maps SEO with targeted Meta ads to make you the #1 choice in your area.',
            icon: '📍',
            highlight: 'Hyper-Local Strategy',
        },
    ];

    return (
        <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-lime/[0.03] rounded-full blur-[120px]"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs tracking-[0.3em] uppercase text-gray-500 font-data mb-3">OUR EDGE</p>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
                        What Sets Us Apart
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg">
                        A smarter approach to scaling your business
                    </p>
                </motion.div>

                {/* Approach Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {approaches.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group relative rounded-2xl p-6 md:p-7 overflow-hidden cursor-default
                                bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]
                                hover:border-neon-lime/40 hover:bg-white/[0.06]
                                transition-all duration-500
                                hover:shadow-[0_8px_40px_rgba(57,255,20,0.12)]"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.08 * index }}
                        >
                            {/* Corner glow on hover */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-lime/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Icon */}
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-neon-lime transition-colors duration-300">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-5 relative z-10">
                                {item.description}
                            </p>

                            {/* Highlight badge */}
                            <div className="inline-flex items-center gap-2">
                                <div className="bg-neon-lime/10 border border-neon-lime/20 rounded-lg px-3 py-1.5">
                                    <span className="text-neon-lime font-bold text-xs">{item.highlight}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
