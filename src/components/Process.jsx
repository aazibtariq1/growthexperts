import { motion } from 'framer-motion';

const Process = () => {
    const steps = [
        {
            number: '01',
            title: 'The Audit',
            description: 'We tear down your current ads to find exactly where you are leaking money.',
        },
        {
            number: '02',
            title: 'The Build',
            description: 'We craft offers and creatives that trigger the psychological "need to buy".',
        },
        {
            number: '03',
            title: 'The Scale',
            description: 'We launch, track, and kill the losers. Then we scale the winners to the moon.',
        },
    ];

    return (
        <section className="py-16 md:py-24 px-4 md:px-6 bg-surface/30">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    The <span className="text-neon-lime">3-Step</span> Growth Protocol
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 * index }}
                        >
                            <div className="bg-surface border border-gray-800 rounded-2xl p-6 md:p-8 h-full hover:border-neon-lime/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(57,255,20,0.15)]">
                                <div className="text-5xl md:text-7xl font-bold text-neon-lime/20 mb-3 md:mb-4 group-hover:text-neon-lime/40 transition-colors">
                                    {step.number}
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-neon-lime transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {step.description}
                                </p>
                            </div>

                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-neon-lime/50 to-transparent"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
