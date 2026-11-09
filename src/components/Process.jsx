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
                {/* Overline + heading — no lime span here, uses structure instead */}
                <motion.div
                    className="text-center mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs tracking-[0.3em] uppercase text-gray-500 font-data mb-3">HOW WE WORK</p>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                        The 3-Step Growth Protocol
                    </h2>
                </motion.div>

                {/* Steps with neon progress track on desktop */}
                <div className="relative">
                    {/* Desktop progress track — runs through all 3 cards */}
                    <div className="hidden md:block absolute top-[4.5rem] left-[16.67%] right-[16.67%] h-px">
                        <div className="w-full h-full bg-gradient-to-r from-neon-lime/20 via-neon-lime/60 to-neon-lime/20"></div>
                    </div>

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
                                {/* Step dot on the track */}
                                <div className="hidden md:flex absolute top-[4.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-neon-lime border-2 border-neon-lime shadow-[0_0_8px_rgba(57,255,20,0.6)] z-10"></div>

                                <div className="bg-surface border border-gray-800 rounded-2xl p-6 md:p-8 pt-8 md:pt-12 h-full hover:border-neon-lime/40 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(57,255,20,0.1)]">
                                    {/* Small step number */}
                                    <p className="font-data text-xs text-neon-lime/50 tracking-[0.2em] mb-3 group-hover:text-neon-lime/80 transition-colors">
                                        STEP {step.number}
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-neon-lime transition-colors duration-300">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
