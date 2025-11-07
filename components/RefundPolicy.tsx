import React from 'react';

interface PolicyProps {
    onClose: () => void;
}

export const RefundPolicy: React.FC<PolicyProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4" aria-modal="true" role="dialog">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-5 border-b sticky top-0 bg-white">
                    <h2 className="text-2xl font-bold text-slate-800">سياسة الاسترداد</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-red-600 text-3xl font-bold" aria-label="Close">&times;</button>
                </div>
                <div className="p-8 text-gray-700 space-y-4 text-right leading-relaxed overflow-y-auto">
                    <p>في Joint Flexi، رضا عملائنا هو أولويتنا القصوى. نحن واثقون من جودة وفعالية منتجنا، ولذلك نقدم سياسة استرداد واضحة وعادلة لضمان راحة بالك.</p>

                    <h3 className="font-bold text-xl text-slate-700 pt-4">1. ضمان الدفع عند الاستلام</h3>
                    <p>نحن نطبق سياسة "الدفع عند الاستلام". هذا يعني أنك لن تدفع أي مبلغ مقدماً. عندما يصلك المنتج مع مندوب الشحن، يحق لك:</p>
                    <ul className="list-disc list-inside space-y-2 pr-4">
                        <li>فحص العبوة والتأكد من أنها سليمة ومغلقة بإحكام.</li>
                        <li>التأكد من أن المنتج هو Joint Flexi الأصلي.</li>
                    </ul>
                    <p>إذا لم تكن راضياً تماماً عن المنتج عند استلامه لأي سبب من الأسباب، يمكنك رفض استلامه ولن تتحمل أي تكاليف على الإطلاق. المخاطرة بالكامل تقع على عاتقنا.</p>
                    
                    <h3 className="font-bold text-xl text-slate-700 pt-4">2. الاستبدال والاسترجاع بعد الشراء</h3>
                    <p>نظرًا لطبيعة المنتج ككريم للاستخدام الشخصي، ولأسباب تتعلق بالصحة العامة والسلامة، لا يمكننا قبول إرجاع المنتج بعد فتحه واستخدامه. ومع ذلك، إذا واجهت أي مشكلة تتعلق بجودة المنتج أو استلمت منتجًا تالفًا، يرجى التواصل معنا فورًا.</p>

                    <h3 className="font-bold text-xl text-slate-700 pt-4">3. كيفية التواصل معنا</h3>
                     <p>في حالة وجود أي مشكلة أو استفسار بخصوص طلبك، يرجى التواصل مع فريق دعم العملاء لدينا خلال 48 ساعة من استلام المنتج عبر:</p>
                     <ul className="list-none space-y-2 pr-4">
                        <li><strong>البريد الإلكتروني:</strong> support@jointflexi-eg.com</li>
                        <li><strong>الهاتف:</strong> +20 100 123 4567</li>
                    </ul>
                     <p>نحن هنا لمساعدتك وضمان حصولك على أفضل تجربة ممكنة مع Joint Flexi.</p>
                </div>
                 <div className="p-5 border-t text-right bg-gray-50">
                    <button onClick={onClose} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">إغلاق</button>
                </div>
            </div>
        </div>
    );
};
