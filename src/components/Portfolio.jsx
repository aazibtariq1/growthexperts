import { motion } from 'framer-motion';

const Portfolio = () => {
    const caseStudies = [
        {
            client: 'E-commerce Brand',
            industry: 'Apparel',
            challenge: 'High CPA and stagnant ROAS on Meta Ads.',
            solution: 'Implemented dynamic creative testing and Lookalike audience scaling.',
            results: [
                { metric: 'Monthly Revenue', old: '$15k', new: '$85k' },
                { metric: 'ROAS', old: '1.8x', new: '4.2x' }
            ]
        },
        {
            client: 'Local MedSpa',
            industry: 'Healthcare / Local Service',
            challenge: 'Empty calendar, relying on word of mouth.',
            solution: 'Google Maps SEO + targeted Meta Lead Generation for specific treatments.',
            results: [
                { metric: 'New Leads/Mo', old: '12', new: '145' },
                { metric: 'Cost Per Lead', old: '$55', new: '$12' }
            ]
        },
        {
            client: 'B2B SaaS',
            industry: 'Software',
            challenge: 'Low quality demo bookings.',
            solution: 'Redesigned landing page funnel and shifted focus to high-intent Google Search campaigns.',
            results: [
                { metric: 'Demo Bookings', old: '8/mo', new: '42/mo' },
                { metric: 'Close Rate', old: '10%', new: '28%' }
            ]
        }
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
                        Real results from real campaigns. Here's how we've scaled businesses just like yours.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {caseStudies.map((study, index) => (
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
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-neon-lime transition-colors">{study.client}</h3>
                                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{study.industry}</span>
                                    </div>
                                    <svg className="w-8 h-8 text-gray-700 group-hover:text-neon-lime transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                    </svg>
                                </div>
                                
                                <div className="space-y-4 mb-8">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 mb-1">The Challenge</h4>
                                        <p className="text-sm text-gray-300">{study.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Our Solution</h4>
                                        <p className="text-sm text-gray-300">{study.solution}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 pt-6 border-t border-gray-800 mt-auto">
                                <div className="grid grid-cols-2 gap-4">
                                    {study.results.map((result, i) => (
                                        <div key={i}>
                                            <p className="text-xs text-gray-500 mb-1">{result.metric}</p>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-gray-500 line-through">{result.old}</span>
                                                <svg className="w-3 h-3 text-neon-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                </svg>
                                                <span className="text-lg font-bold text-neon-lime">{result.new}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
