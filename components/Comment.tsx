
import React from 'react';

interface CommentProps {
    avatar: string;
    name: string;
    time: string;
    text: string;
    likes: number;
    isReply?: boolean;
}

export const Comment: React.FC<CommentProps> = ({ avatar, name, time, text, likes, isReply = false }) => {
    const bgColor = isReply ? 'bg-blue-50' : 'bg-white';
    const borderColor = isReply ? 'border-blue-400' : 'border-blue-500';
    const avatarBg = isReply ? 'bg-gradient-to-br from-blue-400 to-teal-500' : 'bg-gradient-to-br from-indigo-500 to-purple-600';

    return (
        <div className={`${bgColor} p-5 rounded-lg border-r-4 ${borderColor} ${isReply ? 'mr-8 md:mr-12' : ''} shadow-sm`}>
            <div className="flex items-center gap-4 mb-3">
                <div className={`w-12 h-12 rounded-full ${avatarBg} flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>{avatar}</div>
                <div>
                    <h4 className="font-bold text-slate-800">{name}</h4>
                    <p className="text-xs text-gray-500">{time}</p>
                </div>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">{text}</p>
            <div className="flex gap-4 text-sm text-gray-500 mt-4">
                <span className="cursor-pointer hover:text-blue-600">❤️ {likes} إعجاب</span>
                <span className="cursor-pointer hover:text-blue-600">💬 رد</span>
            </div>
        </div>
    );
};
