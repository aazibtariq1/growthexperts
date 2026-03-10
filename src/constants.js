// Growth Experts - Shared Constants

export const WHATSAPP_PHONE = '923186725593';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    "Hi Growth Experts, I saw your website. I'm interested in scaling my business with your ads strategy."
)}`;

export const WHATSAPP_FAQ_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    "Hi Growth Experts, I have a question about your services."
)}`;

export const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/in/aazibtariq',
    instagram: '#',
    twitter: '#',
    whatsapp: WHATSAPP_URL,
};

export const NAV_LINKS = [
    { label: 'Services', href: '/#services' },
    { label: 'Process', href: '/#process' },
    { label: 'Results', href: '#/results' },
    { label: 'FAQ', href: '/#faq' },
];
