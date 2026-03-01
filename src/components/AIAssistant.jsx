import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Vapi from '@vapi-ai/web';

// Initialize Vapi with the provided Public Key
const vapi = new Vapi(import.meta.env.VITE_VAPI_PUBLIC_KEY);

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [callStatus, setCallStatus] = useState('inactive'); // inactive, loading, active
    const [errorMsg, setErrorMsg] = useState('');
    const [callDuration, setCallDuration] = useState(0);

    // Timer Logic
    useEffect(() => {
        let interval;
        if (callStatus === 'active') {
            interval = setInterval(() => {
                setCallDuration((prev) => prev + 1);
            }, 1000);
        } else {
            setCallDuration(0);
        }
        return () => clearInterval(interval);
    }, [callStatus]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

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
            setErrorMsg('Connection error. Please try again.');
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
            setErrorMsg('');
            try {
                // If an Assistant ID is provided via ENV, start it. Otherwise throw an error.
                const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID;
                if (!assistantId) {
                    throw new Error('VITE_VAPI_ASSISTANT_ID is missing');
                }

                await vapi.start(assistantId);
            } catch (e) {
                console.error('Failed to start Vapi call:', e);
                setCallStatus('inactive');

                // Handle specific mobile/network permission errors
                if (e?.message?.includes('devices') || e?.name === 'NotAllowedError') {
                    setErrorMsg('Mic access denied. Mobile devices require HTTPS to use the microphone.');
                } else if (e?.message?.includes('VITE_VAPI_ASSISTANT_ID')) {
                    setErrorMsg('Configuration error: Assistant ID is missing.');
                } else {
                    setErrorMsg('Could not access microphone or start AI.');
                }
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
        <>
            {/* Full Screen Call UI Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            className="bg-gray-900 border border-gray-700/50 rounded-[2.5rem] w-full max-w-[380px] h-[700px] max-h-[90vh] flex flex-col overflow-hidden relative shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(57,255,20,0.1)]"
                        >
                            {/* Background glow in active/loading state */}
                            <div className={`absolute inset-0 transition-opacity duration-1000 ${callStatus === 'active' ? 'opacity-20' : 'opacity-0'} bg-gradient-to-b from-neon-lime via-transparent to-transparent`}></div>

                            {/* Top Bar */}
                            <div className="flex justify-between items-center p-6 relative z-10 w-full">
                                <button onClick={handleOpenToggle} className="text-gray-400 hover:text-white transition-colors bg-gray-800/50 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md">
                                    <svg className="w-5 h-5 transform -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                </button>
                                <div className="flex gap-1.5 items-center">
                                    <h3 className="text-[10px] font-bold text-neon-lime uppercase tracking-widest">
                                        End-to-End Encrypted
                                    </h3>
                                    <svg className="w-3 h-3 text-neon-lime" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1v2.5a5.5 5.5 0 00-3 9.88V17a3 3 0 003 3h0a3 3 0 003-3v-3.62A5.5 5.5 0 0012 3.5V1zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 9a1 1 0 110 2 1 1 0 010-2z" /></svg>
                                </div>
                            </div>

                            {/* Center Content (Avatar & Info) */}
                            <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 -mt-10">
                                {/* Avatar */}
                                <div className="relative inline-block mb-8">
                                    {callStatus === 'active' && (
                                        <>
                                            <span className="absolute inset-0 rounded-full border-2 border-neon-lime animate-[ping_2s_ease-out_infinite] opacity-40 scale-150"></span>
                                            <span className="absolute inset-0 rounded-full border-2 border-neon-lime animate-[ping_2.5s_ease-out_infinite_0.5s] opacity-20 scale-125"></span>
                                            <span className="absolute inset-0 rounded-full bg-neon-lime/20 animate-pulse"></span>
                                        </>
                                    )}
                                    <div className={`w-36 h-36 mx-auto rounded-full flex items-center justify-center text-7xl transition-all duration-700 relative z-10 ${callStatus === 'active' ? 'bg-black shadow-[0_0_50px_rgba(57,255,20,0.4)] border border-neon-lime/50' : 'bg-gray-800 border border-gray-700'}`}>
                                        👨🏻‍💼
                                    </div>
                                </div>

                                <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Alex</h2>
                                <p className="text-neon-lime text-base font-medium tracking-wide">Senior Growth Advisor</p>

                                <p className={`mt-6 text-base transition-colors duration-300 ${callStatus === 'active' ? 'text-white font-medium' : 'text-gray-400'}`}>
                                    {callStatus === 'inactive' ? 'Incoming Call...' : callStatus === 'loading' ? 'Connecting to secure line...' : formatTime(callDuration)}
                                </p>
                                {callStatus === 'active' && <p className="text-neon-lime text-sm mt-1 animate-pulse">Call in progress</p>}

                                {errorMsg && (
                                    <p className="mt-6 text-sm text-red-500 bg-red-500/10 border border-red-500/20 py-3 px-4 rounded-xl animate-pulse text-center max-w-[90%]">
                                        {errorMsg}
                                    </p>
                                )}
                            </div>

                            {/* Bottom Controls */}
                            <div className="p-8 pb-12 flex justify-center items-center gap-8 relative z-10 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent">
                                {callStatus === 'inactive' ? (
                                    <button
                                        onClick={toggleCall}
                                        className="w-20 h-20 rounded-full bg-neon-lime text-black flex items-center justify-center hover:scale-105 hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all duration-300 transform group"
                                    >
                                        <svg className="w-10 h-10 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </button>
                                ) : callStatus === 'loading' ? (
                                    <button
                                        disabled
                                        className="w-20 h-20 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center border border-gray-700 cursor-not-allowed shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                                    >
                                        <svg className="w-10 h-10 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            className="w-14 h-14 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700"
                                            onClick={() => {/* Dummy mute logic */ }}
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                        </button>
                                        <button
                                            onClick={toggleCall}
                                            className="w-20 h-20 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.4)] transform"
                                        >
                                            <svg className="w-10 h-10 transform rotate-[135deg]" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </button>
                                        <button
                                            className="w-14 h-14 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700"
                                            onClick={() => {/* Dummy keypad logic */ }}
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" /></svg>
                                        </button>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Float Button container for when modal is closed */}
            {!isOpen && (
                <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
                    <motion.button
                        onClick={handleOpenToggle}
                        className="bg-black border border-neon-lime text-neon-lime w-16 h-16 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(57,255,20,0.3)] hover:shadow-[0_4px_30px_rgba(57,255,20,0.5)] hover:scale-110 transition-all duration-300 relative group"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 200 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Talk to an Expert"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="absolute -top-10 -right-2 bg-neon-lime text-black text-xs font-bold px-3 py-1 rounded w-max opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            Talk to an Expert
                        </span>
                        <span className="absolute inset-0 rounded-full border border-neon-lime animate-[ping_2s_ease-out_infinite] opacity-50"></span>
                    </motion.button>
                </div>
            )}
        </>
    );
};

export default AIAssistant;
