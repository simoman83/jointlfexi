
import React from 'react';

interface TestimonialProps {
    avatar: string;
    name: string;
    location: string;
    text: React.ReactNode;
}

export const Testimonial: React.FC<TestimonialProps> = ({ avatar, name, location, text }) => {
    return (
        <div className="bg-gray-50 border-r-4 border-green-500 p-5 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">{avatar}</div>
                <div>
                    <h4 className="font-bold text-lg text-slate-800">{name}</h4>
                    <p className="text-sm text-gray-500">{location}</p>
                </div>
            </div>
            <div className="italic text-gray-700 leading-relaxed space-y-3">{text}</div>
            <div className="text-yellow-400 text-2xl mt-3">⭐⭐⭐⭐⭐</div>
        </div>
    );
};
