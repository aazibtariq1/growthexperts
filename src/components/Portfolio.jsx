import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../constants';

const Portfolio = () => {
    const methodology = [
        {
            step: '01',
            title: 'Deep-Dive Audit',
            description: 'We analyze your current ad accounts, funnels, competitors, and target audience to find exactly where money is being wasted and where the biggest growth opportunities are.',
            deliverables: ['Ad Account Analysis', 'Competitor Research', 'Audience Mapping'],
        },
        {
            step: '02',
            title: 'Strategy & Creative Build',
            description: 'We craft a custom advertising strategy with psychology-driven creatives, high-converting copy, and a funnel designed to turn cold traffic into paying customers.',
            deliverables: ['Creative Strategy', 'Funnel Architecture', 'Ad Copy & Visuals'],
        },
        {
            step: '03',
            title: 'Launch, Test & Optimize',
            description: 'We launch campaigns, run rapid A/B tests, kill underperformers within 48 hours, and scale winning combinations. Every decision is driven by data, not guesses.',
            deliverables: ['Campaign Management', 'A/B Testing', 'Weekly Reporting'],
        },
    ];

    return (
        <section className="py-20 md:py-32 px-4 md:px-6 relative bg-surface/20" id="results">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-neon-lime/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        We Don't Guess. <br className="hidden sm:block" />
                        <span className="text-neon-lime">We Engineer Growth.</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Our proven methodology for scaling businesses through paid advertising.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {methodology.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-deep-black border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-neon-lime/50 transition-colors duration-500 group relative overflow-hidden flex flex-col h-full"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            {/* Subtle hover background */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="relative z-10 flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="text-neon-lime font-data text-4xl font-bold opacity-30 group-hover:opacity-60 transition-opacity">{item.step}</span>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mt-2 group-hover:text-neon-lime transition-colors">{item.title}</h3>
                                    </div>
                                    <svg className="w-8 h-8 text-gray-700 group-hover:text-neon-lime transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                    </svg>
                                </div>

                                <p className="text-sm text-gray-300 leading-relaxed mb-8">
                                    {item.description}
                                </p>
                            </div>

                            <div className="relative z-10 pt-6 border-t border-gray-800 mt-auto">
                                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-semibold">Deliverables</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.deliverables.map((d, i) => (
                                        <span key={i} className="text-xs bg-neon-lime/10 border border-neon-lime/20 text-neon-lime px-3 py-1 rounded-full font-medium">
                                            {d}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA under methodology */}
                <motion.div
                    className="text-center mt-14 md:mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="text-gray-400 text-base md:text-lg mb-6">
                        Want to see how this applies to your business?
                    </p>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-neon-lime text-black font-bold text-base px-8 py-4 rounded-xl hover:bg-neon-lime/90 transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)]"
                    >
                        Get Your Free Audit
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
