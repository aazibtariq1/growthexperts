const Marquee = () => {
    const logos = [
        {
            name: 'Meta',
            icon: (
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.04c-5.5 0-10 4.48-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.93 3.78-3.93 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33v7A10 10 0 0022 12.06C22 6.52 17.5 2.04 12 2.04z" />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            icon: (
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.5a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
            ),
        },
        {
            name: 'TikTok',
            icon: (
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.971-1.166-1.956-1.282-2.645h.004c-.097-.573-.064-.943-.058-.943h-3.12v14.843c0 .201 0 .399-.008.595 0 .024-.003.046-.004.073 0 .01 0 .022-.002.032v.009a3.28 3.28 0 01-1.62 2.58 3.278 3.278 0 01-1.6.42c-1.8 0-3.26-1.468-3.26-3.281s1.46-3.282 3.26-3.282c.341 0 .68.054 1.004.16l.005-3.17A6.462 6.462 0 007.2 10.06a6.63 6.63 0 00-2.585 1.622 6.142 6.142 0 00-1.394 2.217c-.057.147-.476 1.243-.391 2.876.054 1.025.413 2.088.413 2.088s.272.68.784 1.37c.397.535.868.972 .868.972s1.724 1.468 3.985 1.724c.247.028.5.027.5.027.27 0 1.2-.045 2.228-.533 1.142-.545 1.789-1.358 1.789-1.358s.6-.715.955-1.623c.41-1.05.39-2.326.39-2.693V9.28a9.873 9.873 0 002.416 1.142 10.16 10.16 0 002.127.414v-3.11s-1.337.052-2.97-.865z" />
                </svg>
            ),
        },
        {
            name: 'Google Ads',
            icon: (
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.654 14.593L8.8 5.657a3.373 3.373 0 015.832 0l5.148 8.936a3.373 3.373 0 01-2.916 5.06H6.57a3.373 3.373 0 01-2.916-5.06zM6.57 18.153h10.294a1.873 1.873 0 001.623-2.813L13.34 6.404a1.873 1.873 0 00-3.246 0L4.947 15.34a1.873 1.873 0 001.623 2.813z" />
                    <circle cx="6.5" cy="17.5" r="2.5" />
                </svg>
            ),
        },
        {
            name: 'Shopify',
            icon: (
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.337 3.415c-.022-.165-.174-.248-.29-.26-.115-.012-2.42-.176-2.42-.176s-1.61-1.594-1.79-1.774a.63.63 0 00-.435-.164l-.069.002-.002.001L9.58 23.397l6.55 1.232.785-13.383s.81.207 1.872.207c1.498 0 1.572-.938 1.572-1.195 0-1.127-1.527-1.56-1.527-3.058 0-1.574 1.088-2.673 2.467-2.673.955 0 1.655.497 1.655.497l.575-1.946s-.58-.496-1.806-.496c-1.882 0-3.394 1.35-3.394 3.431 0 .823.312 1.405.312 1.405s-.7.168-1.58.168c-.845 0-1.127-.168-1.127-.168l-.097 1.76s.425.198 1.183.198c.93 0 1.49-.198 1.49-.198s-.282 4.806-.316 5.385z" />
                </svg>
            ),
        },
        {
            name: 'YouTube',
            icon: (
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.016 3.016 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.016 3.016 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
        },
    ];

    // Double the logos array for seamless infinite scroll
    const allLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="py-10 md:py-12 border-y border-neon-lime/20 bg-surface/50 overflow-hidden">
            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface/50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface/50 to-transparent z-10 pointer-events-none"></div>

                <div className="flex animate-marquee">
                    {allLogos.map((logo, index) => (
                        <div key={index} className="flex items-center shrink-0">
                            <div className="flex items-center gap-3 px-6 md:px-8 text-gray-400 hover:text-white transition-colors duration-300">
                                {logo.icon}
                                <span className="text-lg md:text-xl font-bold whitespace-nowrap">
                                    {logo.name}
                                </span>
                            </div>
                            <span className="text-neon-lime/40 text-lg px-3">•</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
