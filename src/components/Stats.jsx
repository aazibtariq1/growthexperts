import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const CounterNumber = ({ end, suffix = '', duration = 2 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        // Respect reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setCount(end);
            return;
        }

        let startTime;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
};

const Stats = () => {
    const lineItems = [
        { label: 'Ad Spend Managed', value: 2, suffix: 'M+', prefix: '$', note: 'across all clients' },
        { label: 'Clients Scaled',   value: 150, suffix: '+', prefix: '',  note: 'and counting' },
        { label: 'Average ROAS',     value: 8,   suffix: 'x', prefix: '',  note: 'return on ad spend' },
        { label: 'Client Retention', value: 97,  suffix: '%', prefix: '',  note: 'stay long-term' },
    ];

    return (
        <section className="py-20 px-4 md:px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-lime/[0.02] to-transparent"></div>
            <div className="max-w-2xl mx-auto relative z-10">
                <motion.div
                    className="rounded-2xl border border-neon-lime/20 bg-surface/40 backdrop-blur-sm overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Invoice header */}
                    <div className="px-6 md:px-8 py-4 border-b border-neon-lime/10 flex items-center justify-between">
                        <div>
                            <p className="text-neon-lime font-data text-xs tracking-[0.2em] uppercase">GROWTH EXPERTS</p>
                            <p className="text-gray-500 font-data text-xs mt-0.5">Performance Report · FY 2026</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500 font-data text-xs">INV-001</p>
                            <div className="mt-1 inline-flex items-center gap-1.5 bg-neon-lime/10 border border-neon-lime/20 rounded px-2 py-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-neon-lime motion-safe:animate-pulse"></span>
                                <span className="text-neon-lime font-data text-xs">VERIFIED</span>
                            </div>
                        </div>
                    </div>

                    {/* Line items */}
                    <div className="divide-y divide-gray-800/50">
                        {lineItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="px-6 md:px-8 py-4 flex items-center justify-between gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 * index }}
                            >
                                <div>
                                    <p className="text-gray-300 text-sm font-medium">{item.label}</p>
                                    <p className="text-gray-600 font-data text-xs mt-0.5">{item.note}</p>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="text-neon-lime font-data font-medium text-xl md:text-2xl">
                                        {item.prefix}<CounterNumber end={item.value} suffix={item.suffix} />
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Invoice footer */}
                    <div className="px-6 md:px-8 py-4 border-t border-neon-lime/10 bg-neon-lime/[0.03]">
                        <p className="text-gray-500 font-data text-xs text-center">
                            Results verified · No vanity metrics · Revenue-first approach
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
