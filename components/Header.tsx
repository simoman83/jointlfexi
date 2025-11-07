
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="bg-slate-800 text-white p-3 border-b-4 border-red-600">
            <div className="max-w-4xl mx-auto flex justify-between items-center text-sm">
                <div className="font-bold text-base">📰 أخبار الصحة المصرية</div>
                <div className="text-slate-300">الثلاثاء، 5 نوفمبر 2025</div>
            </div>
        </header>
    );
};
