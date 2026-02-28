import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Vapi from '@vapi-ai/web';

// Initialize Vapi with the provided Public Key
const vapi = new Vapi(import.meta.env.VITE_VAPI_PUBLIC_KEY);

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [callStatus, setCallStatus] = useState('inactive'); // inactive, loading, active

    useEffect(() => {
        // Vapi Event Listeners
        vapi.on('call-start', () => {
            setCallStatus('active');
        });

        vapi.on('call-end', () => {
            setCallStatus('inactive');
            setIsOpen(false);
        });

        vapi.on('error', (e) => {
            console.error('Vapi Error:', e);
            setCallStatus('inactive');
        });

        return () => {
            vapi.removeAllListeners();
            if (callStatus === 'active') {
                vapi.stop();
            }
        };
    }, []);

    const toggleCall = async () => {
        if (callStatus === 'active' || callStatus === 'loading') {
            setCallStatus('inactive');
            vapi.stop();
        } else {
            setCallStatus('loading');
            try {
                // Because we don't have a pre-configured Assistant ID from the Vapi dashboard,
                // we pass the entire Assistant configuration in code.
                await vapi.start({
                    transcriber: {
                        provider: "deepgram",
                        model: "nova-2",
                        language: "en-US",
                    },
                    model: {
                        provider: "groq",
                        model: "llama-3.3-70b-versatile",
                        temperature: 0.7,
                        messages: [
                            {
                                role: "system",
                                content: `You are an energetic, highly capable, and ultra-realistic human AI sales assistant for "Growth Experts", a digital marketing agency founded by Aazib Tariq.
Your primary goal is to answer questions, sound extremely natural, helpful, and professional, and ultimately encourage the user to book a free audit via WhatsApp or contact the agency.
CRITICAL: Keep your responses VERY concise and conversational (1-2 short sentences max). Do not use lists, bullet points, or complex formatting. Speak exactly like a real human on a phone call. Use filler words like "um" or "ah" occasionally if it feels natural.

Company Info:
- Mission: Turn attention into profit through highly effective advertising.
- Long-Term Vision: Scale into a high-performance digital marketing company worldwide.
- Focus: Professional Facebook and Instagram Ads (Lead Gen, Conversion Optimization, Audience Targeting, Sales Funnels).
- Value Prop: Psychology-based advertising, strong offers, high-quality creatives, delivering real measurable business growth, higher conversion rates, and direct revenue growth.
- Clients: Pakistani and international businesses ready to invest in growth.

Tone: Modern, confident, results-focused, energetic, and friendly. Start by greeting them naturally.`
                            }
                        ],
                    },
                    voice: {
                        provider: "11labs", // Ultra-realistic voice
                        voiceId: "pNInz6obpgDQGcFmaJcg", // Adam voice (professional male) - can be changed
                    },
                    name: "Growth Experts Assistant",
                });
            } catch (e) {
                console.error('Failed to start Vapi call:', e);
                setCallStatus('inactive');
            }
        }
    };

    const handleOpenToggle = () => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
            if (callStatus === 'active' || callStatus === 'loading') {
                vapi.stop();
                setCallStatus('inactive');
            }
        }
    };

    return (
        <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 bg-gray-900 border border-gray-700/50 rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(57,255,20,0.1)] w-[300px] md:w-[320px] overflow-hidden relative"
                    >
                        {/* Background glow in active/loading state */}
                        <div className={`absolute inset-0 transition-opacity duration-700 ${callStatus === 'active' ? 'opacity-10' : 'opacity-0'} bg-gradient-to-b from-neon-lime to-transparent`}></div>

                        <div className="flex justify-between items-center mb-6 relative z-10">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mx-auto">
                                Secure Line
                            </h3>
                            <button onClick={handleOpenToggle} className="absolute right-0 text-gray-500 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <div className="text-center mb-8 relative z-10">
                            {/* Avatar */}
                            <div className="relative inline-block mb-4">
                                {callStatus === 'active' && (
                                    <>
                                        <span className="absolute inset-0 rounded-full border border-neon-lime animate-[ping_2s_ease-in-out_infinite] opacity-30"></span>
                                        <span className="absolute inset-0 rounded-full border border-neon-lime animate-[ping_2.5s_ease-in-out_infinite_0.5s] opacity-20"></span>
                                    </>
                                )}
                                <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-5xl transition-all duration-500 relative z-10 ${callStatus === 'active' ? 'bg-black shadow-[0_0_30px_rgba(57,255,20,0.3)] border border-neon-lime/30' : 'bg-gray-800'}`}>
                                    👨🏻‍💼
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-1">Alex</h2>
                            <p className="text-neon-lime text-sm font-medium">Growth Experts</p>

                            <p className={`mt-4 text-sm transition-colors duration-300 ${callStatus === 'active' ? 'text-white' : 'text-gray-400'}`}>
                                {callStatus === 'inactive' ? 'Ready for your free audit?' : callStatus === 'loading' ? 'Connecting secure line...' : '00:00 - Call in progress'}
                            </p>
                        </div>

                        <div className="flex justify-center items-center gap-6 relative z-10">
                            {callStatus === 'inactive' ? (
                                <button
                                    onClick={toggleCall}
                                    className="w-16 h-16 rounded-full bg-neon-lime text-black flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-300 transform"
                                >
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </button>
                            ) : callStatus === 'loading' ? (
                                <button
                                    disabled
                                    className="w-16 h-16 rounded-full bg-gray-700 text-gray-400 flex items-center justify-center cursor-not-allowed"
                                >
                                    <svg className="w-8 h-8 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                </button>
                            ) : (
                                <>
                                    <button
                                        className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                                    </button>
                                    <button
                                        onClick={toggleCall}
                                        className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 hover:scale-110 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.3)] transform"
                                    >
                                        <svg className="w-8 h-8 transform rotate-[135deg]" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </button>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Float Button */}
            {!isOpen && (
                <motion.button
                    onClick={handleOpenToggle}
                    className="bg-black border border-neon-lime text-neon-lime w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(57,255,20,0.3)] hover:shadow-[0_4px_30px_rgba(57,255,20,0.5)] hover:scale-110 transition-all duration-300 relative group"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Call AI"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="absolute -top-10 -right-2 bg-neon-lime text-black text-xs font-bold px-3 py-1 rounded w-max opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Call AI Sales Partner
                    </span>
                    <span className="absolute inset-0 rounded-full border border-neon-lime animate-ping opacity-50"></span>
                </motion.button>
            )}
        </div>
    );
};

export default AIAssistant;
