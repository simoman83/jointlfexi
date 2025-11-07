import React from 'react';

interface CtaButtonProps {
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const CtaButton: React.FC<CtaButtonProps> = ({ onClick }) => {
    return (
        <div className="px-5 md:px-8">
            <a 
                href="#order-form" 
                onClick={onClick} 
                className="block w-full max-w-2xl mx-auto text-center bg-gradient-to-r from-red-600 to-orange-500 text-white text-2xl md:text-3xl font-extrabold py-5 px-8 my-8 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
                🛒 استعجل الطلب
            </a>
        </div>
    );
};