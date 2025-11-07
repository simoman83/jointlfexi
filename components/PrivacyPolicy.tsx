import React from 'react';

interface PolicyProps {
    onClose: () => void;
}

export const PrivacyPolicy: React.FC<PolicyProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4" aria-modal="true" role="dialog">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-5 border-b sticky top-0 bg-white">
                    <h2 className="text-2xl font-bold text-slate-800">سياسة الخصوصية</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-red-600 text-3xl font-bold" aria-label="Close">&times;</button>
                </div>
                <div className="p-8 text-gray-700 space-y-4 text-right leading-relaxed overflow-y-auto">
                    <p><strong>تاريخ السريان:</strong> 5 نوفمبر 2025</p>
                    <p>نحن في Joint Flexi ("الشركة"، "نحن"، "لنا") نلتزم بحماية خصوصية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات التي تقدمها لنا عند استخدام موقعنا وطلب منتجاتنا.</p>
                    
                    <h3 className="font-bold text-xl text-slate-700 pt-4">1. المعلومات التي نجمعها</h3>
                    <p>عند تقديم طلب، نطلب منك تقديم المعلومات التالية:</p>
                    <ul className="list-disc list-inside space-y-2 pr-4">
                        <li>الاسم الكامل</li>
                        <li>رقم الهاتف</li>
                    </ul>
                    <p>نحن نستخدم هذه المعلومات فقط لغرض تأكيد طلبك وتوصيل المنتج إليك.</p>

                    <h3 className="font-bold text-xl text-slate-700 pt-4">2. كيف نستخدم معلوماتك</h3>
                    <p>تُستخدم المعلومات التي تقدمها بشكل أساسي في:</p>
                    <ul className="list-disc list-inside space-y-2 pr-4">
                        <li>معالجة طلبك وتأكيده عبر الهاتف.</li>
                        <li>تسهيل عملية توصيل المنتج إلى عنوانك.</li>
                        <li>التواصل معك بخصوص أي استفسارات تتعلق بطلبك.</li>
                    </ul>

                    <h3 className="font-bold text-xl text-slate-700 pt-4">3. مشاركة البيانات</h3>
                    <p>نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أي طرف ثالث لأغراض تسويقية. يتم مشاركة معلوماتك فقط مع شركة الشحن المسؤولة عن توصيل طلبك.</p>

                    <h3 className="font-bold text-xl text-slate-700 pt-4">4. أمن البيانات</h3>
                    <p>نحن نتخذ إجراءات أمنية معقولة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الكشف عنها.</p>

                    <h3 className="font-bold text-xl text-slate-700 pt-4">5. الاتصال بنا</h3>
                    <p>إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك الاتصال بنا عبر:</p>
                     <ul className="list-none space-y-2 pr-4">
                        <li><strong>البريد الإلكتروني:</strong> support@jointflexi-eg.com</li>
                        <li><strong>الهاتف:</strong> +20 100 123 4567</li>
                    </ul>
                </div>
                <div className="p-5 border-t text-right bg-gray-50">
                    <button onClick={onClose} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">إغلاق</button>
                </div>
            </div>
        </div>
    );
};
