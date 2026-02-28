import { motion } from 'framer-motion';

const Comparison = () => {
    const comparisons = [
        {
            category: 'The Strategy',
            others: '"Hope & Pray"',
            us: 'Data-Backed Psychology',
        },
        {
            category: 'The Creative',
            others: '"Boring Stock Photos"',
            us: 'High-Conversion VSLs',
        },
        {
            category: 'The Focus',
            others: '"Vanity Metrics (Likes)"',
            us: 'Revenue & ROAS',
        },
        {
            category: 'The Scale',
            others: '"Fails at scale"',
            us: 'Aggressive Profit Scaling',
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
                    Why Most Ads <span className="text-neon-lime">Fail</span>
                </motion.h2>
                <motion.p
                    className="text-gray-400 text-center text-base md:text-lg mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    (And Why Ours Don't)
                </motion.p>

                {/* Mobile: Card layout, Desktop: Table */}
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                    <motion.table
                        className="w-full min-w-[600px]"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <thead>
                            <tr className="border-b border-gray-800">
                                <th className="py-4 px-6 text-left text-gray-400 font-medium"></th>
                                <th className="py-4 px-6 text-center text-gray-500 font-medium">Other Agencies</th>
                                <th className="py-4 px-6 text-center text-neon-lime font-bold">Growth Experts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((row, index) => (
                                <motion.tr
                                    key={index}
                                    className="border-b border-gray-800/50 hover:bg-surface/50 transition-colors"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                >
                                    <td className="py-8 px-6 font-bold text-lg">{row.category}</td>
                                    <td className="py-8 px-6 text-center">
                                        <div className="flex items-center justify-center gap-2 text-gray-400">
                                            <span className="text-red-500 text-xl">❌</span>
                                            <span className="italic">{row.others}</span>
                                        </div>
                                    </td>
                                    <td className="py-8 px-6 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <span className="text-neon-lime text-xl">✅</span>
                                            <span className="text-neon-lime font-semibold">{row.us}</span>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </motion.table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                    {comparisons.map((row, index) => (
                        <motion.div
                            key={index}
                            className="bg-surface rounded-xl p-5 border border-gray-800"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                        >
                            <h3 className="font-bold text-lg mb-3">{row.category}</h3>
                            <div className="flex items-center gap-2 text-gray-400 mb-2">
                                <span className="text-red-500">❌</span>
                                <span className="italic text-sm">{row.others}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-neon-lime">✅</span>
                                <span className="text-neon-lime font-semibold text-sm">{row.us}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Comparison;
