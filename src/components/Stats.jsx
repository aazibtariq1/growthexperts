import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const CounterNumber = ({ end, suffix = '', duration = 2 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}{suffix}
        </span>
    );
};

const Stats = () => {
    const stats = [
        { value: 2, suffix: 'M+', label: 'Ad Spend Managed', prefix: '$' },
        { value: 150, suffix: '+', label: 'Clients Scaled', prefix: '' },
        { value: 8, suffix: 'x', label: 'Average ROAS', prefix: '' },
        { value: 97, suffix: '%', label: 'Client Retention', prefix: '' },
    ];

    return (
        <section className="py-20 px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-lime/[0.02] to-transparent"></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 rounded-2xl border border-gray-800/50 bg-surface/30 backdrop-blur-sm hover:border-neon-lime/30 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <div className="text-4xl md:text-5xl font-bold text-neon-lime mb-2">
                                {stat.prefix}<CounterNumber end={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-gray-400 text-sm md:text-base">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
