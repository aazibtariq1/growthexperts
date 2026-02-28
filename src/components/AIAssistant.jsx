import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isThinking, setIsThinking] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [response, setResponse] = useState('');
    const [inputText, setInputText] = useState('');

    // Conversation history to maintain context
    const [messages, setMessages] = useState([
        {
            role: 'system',
            content: `You are an energetic, highly capable, and human-like AI sales assistant for "Growth Experts", a digital marketing agency founded by Aazib Tariq.
Your primary goal is to answer questions, sound extremely natural, helpful, and professional, and ultimately encourage the user to book a free audit via WhatsApp or contact the agency.
CRITICAL: Keep your responses VERY concise and conversational (1-3 very short sentences max) because they will be read out loud by a voice synthesizer. Do not use lists, bullet points, or complex formatting. Speak like a real human on a phone call.

Company Info:
- Mission: Turn attention into profit through highly effective advertising.
- Long-Term Vision: Scale into a high-performance digital marketing company worldwide.
- Focus: Professional Facebook and Instagram Ads (Lead Gen, Conversion Optimization, Audience Targeting, Sales Funnels).
- Value Prop: Psychology-based advertising, strong offers, high-quality creatives, delivering real measurable business growth, higher conversion rates, and direct revenue growth.
- Clients: Pakistani and international businesses ready to invest in growth.

Tone: Modern, confident, results-focused, energetic, and friendly. Start by greeting them naturally.`
        }
    ]);

    const recognitionRef = useRef(null);
    const synthRef = useRef(window.speechSynthesis);

    useEffect(() => {
        // Initialize Speech Recognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = 'en-US';

            recognitionRef.current.onstart = () => {
                setIsListening(true);
                setTranscript('Listening...');
            };

            recognitionRef.current.onresult = async (event) => {
                const text = event.results[0][0].transcript;
                setTranscript(text);
                setIsListening(false);
                await handleAIResponse(text);
            };

            recognitionRef.current.onerror = (event) => {
                console.error('Speech recognition error', event.error);
                setIsListening(false);
                setTranscript('Try again...');
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
            };
        }

        return () => {
            if (synthRef.current) {
                synthRef.current.cancel();
            }
        };
    }, [messages]);

    const handleAIResponse = async (userText) => {
        setIsThinking(true);
        setResponse('Thinking...');

        const newMessages = [...messages, { role: 'user', content: userText }];
        setMessages(newMessages);

        try {
            const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'llama-3.3-70b-versatile',
                    messages: newMessages,
                    temperature: 0.7,
                    max_tokens: 150
                })
            });

            const data = await res.json();
            if (data.choices && data.choices.length > 0) {
                const aiText = data.choices[0].message.content;
                setResponse(aiText);
                setMessages([...newMessages, { role: 'assistant', content: aiText }]);
                speakOutLoud(aiText);
            } else {
                setResponse('Oops, I had a brain freeze.');
            }
        } catch (error) {
            console.error('Error fetching Groq:', error);
            setResponse('Sorry, connection issue.');
        } finally {
            setIsThinking(false);
        }
    };

    const speakOutLoud = (text) => {
        if (!synthRef.current) return;

        synthRef.current.cancel(); // Stop anything currently playing

        const utterance = new SpeechSynthesisUtterance(text);

        // Try to find a good English voice
        const voices = synthRef.current.getVoices();
        const preferredVoice = voices.find(v => v.name.includes('Google US English') || v.name.includes('Samantha') || v.lang === 'en-US');
        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        utterance.rate = 1.05; // Slightly faster sounds more energetic
        utterance.pitch = 1.0;

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => {
            setIsSpeaking(false);
            // Optionally auto-restart listening here if you want a continuous conversation,
            // but for a web widget, click-to-talk is usually safer.
        };

        synthRef.current.speak(utterance);
    };

    const toggleAssistant = () => {
        if (!isOpen) {
            setIsOpen(true);
            // Greet when opened if conversation just started
            if (messages.length === 1) {
                handleAIResponse("Hi, I just opened the voice assistant. Please introduce yourself briefly.");
            }
        } else {
            setIsOpen(false);
            synthRef.current.cancel();
            if (isListening && recognitionRef.current) {
                recognitionRef.current.stop();
            }
        }
    };

    const startListening = () => {
        if (recognitionRef.current && !isListening && !isThinking && !isSpeaking) {
            synthRef.current.cancel();
            try {
                recognitionRef.current.start();
            } catch (e) {
                console.error("Recognition already started");
            }
        }
    };

    // If API isn't supported
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
        return null;
    }

    return (
        <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 bg-surface border border-gray-800 rounded-2xl p-5 shadow-[0_0_30px_rgba(57,255,20,0.15)] w-[300px] md:w-[350px]"
                    >
                        <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-3">
                            <h3 className="font-bold text-white flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isThinking || isSpeaking || isListening ? 'bg-neon-lime' : 'bg-gray-500'}`}></span>
                                    <span className={`relative inline-flex rounded-full h-3 w-3 ${isThinking || isSpeaking || isListening ? 'bg-neon-lime' : 'bg-gray-500'}`}></span>
                                </span>
                                AI Sales Agent
                            </h3>
                            <button onClick={toggleAssistant} className="text-gray-400 hover:text-white">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <div className="h-[120px] overflow-y-auto mb-4 text-sm text-gray-300 flex flex-col justify-end">
                            {transcript && (
                                <div className="mb-2 text-right">
                                    <span className="bg-gray-800 text-white px-3 py-1.5 rounded-lg inline-block rounded-br-none">{transcript}</span>
                                </div>
                            )}
                            {response && (
                                <div className="text-left">
                                    <span className="bg-neon-lime/10 text-neon-lime border border-neon-lime/20 px-3 py-1.5 rounded-lg inline-block rounded-bl-none">{response}</span>
                                </div>
                            )}
                        </div>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                if (inputText.trim() && !isThinking) {
                                    setTranscript(inputText);
                                    handleAIResponse(inputText);
                                    setInputText('');
                                }
                            }}
                            className="flex gap-2 mb-3"
                        >
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Or type your message..."
                                className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-neon-lime transition-colors"
                                disabled={isThinking}
                            />
                            <button
                                type="submit"
                                disabled={!inputText.trim() || isThinking}
                                className="bg-gray-800 text-neon-lime px-3 py-2 rounded-lg font-bold disabled:opacity-50 hover:bg-gray-700 transition-colors"
                            >
                                Send
                            </button>
                        </form>

                        <button
                            onClick={startListening}
                            disabled={isListening || isThinking}
                            className={`w-full py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2
                                ${isListening ? 'bg-red-500 text-white animate-pulse' :
                                    isThinking ? 'bg-gray-700 text-gray-400 cursor-not-allowed' :
                                        isSpeaking ? 'bg-blue-500 text-white animate-pulse' :
                                            'bg-neon-lime text-black hover:bg-neon-lime/90 hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]'}`}
                        >
                            {isListening ? (
                                <>
                                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                    Listening...
                                </>
                            ) : isThinking ? (
                                <>
                                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                    Thinking...
                                </>
                            ) : isSpeaking ? (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                                    Speaking...
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                    Tap to Speak
                                </>
                            )}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Float Button */}
            {!isOpen && (
                <motion.button
                    onClick={toggleAssistant}
                    className="bg-black border border-neon-lime text-neon-lime w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(57,255,20,0.3)] hover:shadow-[0_4px_30px_rgba(57,255,20,0.5)] hover:scale-110 transition-all duration-300 relative group"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Talk to AI"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                    <span className="absolute -top-10 -right-2 bg-neon-lime text-black text-xs font-bold px-3 py-1 rounded w-max opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Talk to AI Sales Agent
                    </span>
                    <span className="absolute inset-0 rounded-full border border-neon-lime animate-ping opacity-50"></span>
                </motion.button>
            )}
        </div>
    );
};

export default AIAssistant;
