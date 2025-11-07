
import React from 'react';

interface DoctorQuoteProps {
    avatarInitial: string;
    name: string;
    title: string;
    quote: string;
}

export const DoctorQuote: React.FC<DoctorQuoteProps> = ({ avatarInitial, name, title, quote }) => {
    return (
        <div className="bg-white border-2 border-blue-500 rounded-xl p-6 my-8 relative shadow-lg">
            <div className="absolute top-0 right-5 text-8xl text-blue-500 opacity-10 -translate-y-1/3">“</div>
            <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">{avatarInitial}</div>
                <div>
                    <h4 className="text-xl font-bold text-slate-800">{name}</h4>
                    <p className="text-sm text-gray-500">{title}</p>
                </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed italic">"{quote}"</p>
        </div>
    );
};
