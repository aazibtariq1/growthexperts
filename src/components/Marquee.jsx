const Marquee = () => {
    const logos = [
        { name: 'Meta', icon: '📘' },
        { name: 'Instagram', icon: '📸' },
        { name: 'TikTok', icon: '🎵' },
        { name: 'Shopify', icon: '🛒' },
    ];

    // Double the logos array for seamless infinite scroll
    const allLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="py-12 border-y border-neon-lime/20 bg-surface/50 overflow-hidden">
            <div className="relative">
                <div className="flex animate-marquee">
                    {allLogos.map((logo, index) => (
                        <div key={index} className="flex items-center shrink-0">
                            <div className="flex items-center gap-3 px-8">
                                <span className="text-3xl">{logo.icon}</span>
                                <span className="text-xl font-bold text-gray-300 whitespace-nowrap">
                                    {logo.name}
                                </span>
                            </div>
                            <span className="text-neon-lime text-2xl px-4">➤</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
