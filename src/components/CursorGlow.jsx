import { useEffect, useState } from 'react';

const CursorGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!visible) setVisible(true);
        };

        const handleMouseLeave = () => setVisible(false);
        const handleMouseEnter = () => setVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [visible]);

    // Don't render on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <div
            className="fixed pointer-events-none z-[9999] transition-opacity duration-300"
            style={{
                left: position.x,
                top: position.y,
                opacity: visible ? 1 : 0,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <div
                className="w-[300px] h-[300px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(57, 255, 20, 0.08) 0%, rgba(57, 255, 20, 0.03) 40%, transparent 70%)',
                }}
            />
        </div>
    );
};

export default CursorGlow;
