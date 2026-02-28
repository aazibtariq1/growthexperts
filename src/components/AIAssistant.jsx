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
                        className="mb-4 bg-surface border border-gray-800 rounded-2xl p-6 shadow-[0_0_40px_rgba(57,255,20,0.15)] w-[300px] md:w-[350px]"
                    >
                        <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
                            <h3 className="font-bold text-white flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${callStatus === 'active' ? 'bg-neon-lime' : callStatus === 'loading' ? 'bg-yellow-500' : 'bg-gray-500'}`}></span>
                                    <span className={`relative inline-flex rounded-full h-3 w-3 ${callStatus === 'active' ? 'bg-neon-lime' : callStatus === 'loading' ? 'bg-yellow-500' : 'bg-gray-500'}`}></span>
                                </span>
                                AI Sales Partner
                            </h3>
                            <button onClick={handleOpenToggle} className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <div className="text-center mb-6">
                            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${callStatus === 'active' ? 'bg-neon-lime/20 shadow-[0_0_30px_rgba(57,255,20,0.4)]' : 'bg-gray-800'}`}>
                                <svg className={`w-10 h-10 ${callStatus === 'active' ? 'text-neon-lime animate-pulse' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                            </div>
                            <p className="text-sm text-gray-400">
                                {callStatus === 'inactive' ? 'Ready to talk?' : callStatus === 'loading' ? 'Connecting to AI...' : 'Call in progress. Say hi!'}
                            </p>
                        </div>

                        <button
                            onClick={toggleCall}
                            disabled={callStatus === 'loading'}
                            className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2
                                ${callStatus === 'active' ? 'bg-red-500 hover:bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]' :
                                    callStatus === 'loading' ? 'bg-gray-700 text-gray-400 cursor-not-allowed' :
                                        'bg-neon-lime text-black hover:bg-neon-lime/90 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]'}`}
                        >
                            {callStatus === 'active' ? (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" /></svg>
                                    End Call
                                </>
                            ) : callStatus === 'loading' ? (
                                <>
                                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                    Connecting...
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    Start Live Call
                                </>
                            )}
                        </button>
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
