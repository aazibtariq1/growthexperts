import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    {
        question: 'How long until I see results?',
        answer: 'Most clients start seeing quality leads within the first 7–14 days of campaign launch. However, real optimization and scaling happens in weeks 3–6 as we gather data, kill underperformers, and double down on winners.',
    },
    {
        question: 'What\'s the minimum ad budget I need?',
        answer: 'We recommend a minimum of PKR 30,000/month for ad spend (separate from our management fee). This gives us enough room to test, iterate, and find winning audiences. The more budget, the faster we scale your results.',
    },
    {
        question: 'Do you guarantee results?',
        answer: 'We don\'t make empty promises — but our track record speaks for itself. We\'ve generated 2,000+ leads at costs as low as PKR 9 per conversation. If we don\'t believe we can deliver, we\'ll tell you upfront.',
    },
    {
        question: 'Which platforms do you run ads on?',
        answer: 'Primarily Meta (Facebook & Instagram) — that\'s where the magic happens for most businesses. We also offer Google Maps / Local SEO for businesses that need to dominate local search results.',
    },
    {
        question: 'What industries do you work with?',
        answer: 'We work with a wide range — from EdTech and e-commerce to real estate, health & fitness, construction, and professional services. If your customers are on social media, we can reach them.',
    },
    {
        question: 'How is Growth Experts different from other agencies?',
        answer: 'Most agencies run generic campaigns and pray for results. We engineer psychology-driven funnels backed by real data. We focus on revenue and ROAS, not vanity metrics like likes and impressions. Plus, our AI-powered tools give you an edge no traditional agency can match.',
    },
    {
        question: 'What does the "Free Audit" include?',
        answer: 'We\'ll review your current ad account (if you have one), analyze your target audience, assess your creative strategy, and identify exactly where you\'re leaking money. You\'ll walk away with a clear action plan — no strings attached.',
    },
    {
        question: 'Can I cancel anytime?',
        answer: 'Absolutely. We don\'t lock you into long-term contracts. Our clients stay because of results, not obligations. That said, we recommend at least a 90-day commitment to see the full impact of our optimization process.',
    },
];

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
    const buttonId = `faq-button-${index}`;
    const contentId = `faq-content-${index}`;

    return (
        <motion.div
            className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen
                    ? 'border-neon-lime/30 bg-white/[0.04] shadow-[0_0_25px_rgba(57,255,20,0.06)]'
                    : 'border-gray-800 bg-surface/50 hover:border-gray-700'
                }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 * index }}
        >
            <button
                id={buttonId}
                onClick={onClick}
                className="w-full flex items-center justify-between gap-4 px-5 md:px-7 py-5 md:py-6 text-left group"
                aria-expanded={isOpen}
                aria-controls={contentId}
            >
                <span className={`text-sm md:text-base font-semibold transition-colors duration-300 ${isOpen ? 'text-neon-lime' : 'text-white group-hover:text-gray-200'
                    }`}>
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen
                            ? 'bg-neon-lime/20 text-neon-lime'
                            : 'bg-gray-800 text-gray-400 group-hover:bg-gray-700'
                        }`}
                >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={contentId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 md:px-7 pb-5 md:pb-6">
                            <div className="h-px bg-gradient-to-r from-neon-lime/20 via-neon-lime/10 to-transparent mb-4"></div>
                            <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-16 md:py-24 px-4 md:px-6 relative">
            {/* Background accent */}
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-neon-lime/[0.02] rounded-full blur-[100px]"></div>

            <div className="max-w-3xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-10 md:mb-14"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
                        Got <span className="text-neon-lime">Questions?</span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        Everything you need to know before we scale your business
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-3 md:space-y-4">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-10 md:mt-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-gray-400 text-sm md:text-base mb-4">
                        Still have questions? Let's talk.
                    </p>
                    <a
                        href="https://wa.me/923186725593?text=Hi%20Growth%20Experts,%20I%20have%20a%20question%20about%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-neon-lime font-semibold text-sm hover:underline underline-offset-4 transition-all duration-300"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Ask on WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
