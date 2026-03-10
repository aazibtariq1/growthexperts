import { motion } from 'framer-motion';
import { useState } from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Ahmed R.',
            business: 'Skills.com',
            industry: 'EdTech',
            quote: 'Growth Experts completely transformed our ad strategy. We went from burning money on ads to generating 1,167 conversations in a single campaign at just PKR 9 per lead. The ROI is insane.',
            result: '1,167 Leads',
            metric: 'PKR 9/Lead',
            avatar: 'AR',
        },
        {
            name: 'Sara K.',
            business: 'Luxe Interiors',
            industry: 'Home & Garden',
            quote: 'Before Growth Experts, we were spending lakhs with zero strategy. Now every rupee is tracked, and our showroom is packed with qualified buyers from Meta ads alone.',
            result: '4.2x ROAS',
            metric: '180K+ Reach',
            avatar: 'SK',
        },
        {
            name: 'Hassan M.',
            business: 'FitZone Gym',
            industry: 'Health & Fitness',
            quote: 'They didn\'t just run ads — they built an entire funnel. Our membership signups tripled in 2 months. The psychology-driven creatives actually convert.',
            result: '3x Signups',
            metric: '60 Days',
            avatar: 'HM',
        },
        {
            name: 'Fatima A.',
            business: 'GlowUp Skincare',
            industry: 'Beauty & Cosmetics',
            quote: 'We tried 3 agencies before Growth Experts. None of them understood our audience like they do. 677 conversations from a single campaign — unheard of for our niche.',
            result: '677 Leads',
            metric: 'PKR 16/Lead',
            avatar: 'FA',
        },
        {
            name: 'Bilal T.',
            business: 'BuildRight Construction',
            industry: 'Construction',
            quote: 'As a construction company, we thought digital ads wouldn\'t work for us. Growth Experts proved us wrong. We\'re now getting high-ticket project inquiries directly on WhatsApp.',
            result: '12x ROAS',
            metric: '100K+ Reach',
            avatar: 'BT',
        },
        {
            name: 'Zainab N.',
            business: 'LearnSmart Academy',
            industry: 'Education',
            quote: 'The team at Growth Experts is relentless. They scaled our ad account from PKR 7,500 to PKR 50,000/month while keeping the cost per lead lower than ever. Absolute game-changers.',
            result: '254→1.1K Leads',
            metric: 'Scaled 4x',
            avatar: 'ZN',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Show 3 at a time on desktop, 1 on mobile
    const visibleTestimonials = testimonials;

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
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
                        What Our <span className="text-neon-lime">Clients</span> Say
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        Real results from real businesses we've scaled
                    </p>
                </motion.div>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {visibleTestimonials.map((testimonial, index) => (
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

                            {/* Quote icon */}
                            <div className="text-neon-lime/20 text-5xl font-serif leading-none mb-3 select-none group-hover:text-neon-lime/40 transition-colors duration-300">
                                "
                            </div>

                            {/* Quote text */}
                            <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-6 relative z-10">
                                {testimonial.quote}
                            </p>

                            {/* Result badge */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className="bg-neon-lime/10 border border-neon-lime/20 rounded-lg px-3 py-1.5">
                                    <span className="text-neon-lime font-bold text-sm">{testimonial.result}</span>
                                </div>
                                <span className="text-gray-500 text-xs">{testimonial.metric}</span>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5"></div>

                            {/* Author info */}
                            <div className="flex items-center gap-3 relative z-10">
                                {/* Avatar */}
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-lime/30 to-neon-lime/10 border border-neon-lime/20 flex items-center justify-center shrink-0">
                                    <span className="text-neon-lime font-bold text-xs">{testimonial.avatar}</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-xs">{testimonial.business} · {testimonial.industry}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom stats strip */}
                <motion.div
                    className="mt-10 md:mt-14 grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {[
                        { value: '2,098+', label: 'Leads Generated' },
                        { value: '315K+', label: 'Total Reach' },
                        { value: 'PKR 9', label: 'Lowest CPL' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-xl md:text-2xl font-bold text-neon-lime">{stat.value}</div>
                            <div className="text-gray-500 text-xs md:text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
