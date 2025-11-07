
import React from 'react';

export const ArticleHeader: React.FC = () => {
    return (
        <div className="p-5 md:p-8 bg-white">
            <span className="bg-red-600 text-white inline-block px-4 py-1 text-sm font-bold mb-4 rounded">🏥 صحة وطب</span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-5">
                اكتشاف طبي مذهل: المصريون فوق الـ50 يتخلصون من آلام المفاصل المزمنة في 14 يوماً فقط بدون جراحة!
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 pb-5 border-b border-gray-200">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">د.م</div>
                <div>
                    <p className="font-bold text-slate-800">د. محمد الشافعي - استشاري أمراض الروماتيزم</p>
                    <p>القاهرة، مصر • منذ ساعتين • 12,847 قراءة</p>
                </div>
            </div>
        </div>
    );
};
