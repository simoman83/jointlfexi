import React from 'react';

// No props needed as this is now a standard HTML form.
interface OrderFormProps {}

export const OrderForm: React.FC<OrderFormProps> = () => {
    // Regex for Egyptian phone numbers (mobiles: 010,011,012,015 and major landlines)
    const phoneRegex = /^(01[0125][0-9]{8})$|^0(2|3)[0-9]{7,8}$/;

    // This component now renders a standard HTML form.
    // All state and submission logic have been removed from React.
    // The browser will handle validation via `required` and `pattern` attributes,
    // and submission via the `action` and `method` attributes on the <form> tag.
    // The hidden input ensures the 'submit' parameter is always sent, which is what the user's PHP script expects.

    return (
        <div id="order-form" className="bg-gradient-to-br from-pink-500 to-red-500 p-6 md:p-10 my-8">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-white text-3xl md:text-4xl font-extrabold text-center mb-6">🎁 اطلب الآن واستعد حريتك!</h2>
                
                <form 
                    action="https://moab.lovestoblog.com/apiegy.php" 
                    method="GET"
                    className="bg-white p-8 rounded-xl shadow-2xl space-y-5"
                >
                    <div>
                        <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="name">👤 الاسم الكامل:</label>
                        <input 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-400" 
                            id="name"
                            name="name" // Required for standard form submission
                            type="text" 
                            placeholder="مثال: أحمد محمد حسن" 
                            required 
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="phone">📱 رقم الهاتف:</label>
                        <input 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-400" 
                            id="phone"
                            name="phone" // Required for standard form submission
                            type="tel" 
                            placeholder="مثال: 01012345678"
                            required 
                            pattern={phoneRegex.source}
                            title="الرجاء إدخال رقم هاتف مصري صحيح (موبايل أو أرضي)."
                        />
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg text-center my-4">
                        <p className="text-gray-600 text-lg">السعر بعد خصم 50%:</p>
                        <p className="text-4xl font-extrabold text-red-600">949 جنيه</p>
                        <p className="text-lg text-gray-500 line-through">1898 جنيه</p>
                        <p className="text-green-600 font-bold mt-1">+ توصيل مجاني لجميع المحافظات</p>
                    </div>
                    
                    {/* Hidden input to guarantee the 'submit' key is sent, as required by the PHP script */}
                    <input type="hidden" name="i" value="2" />
                    <input type="hidden" name="submit" value="submit" />
                    <input type="hidden" name="subacc" value="" />
                    
                    <button 
                        type="submit" 
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-extrabold text-2xl py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                        🛒 أطلب الآن - الدفع عند الاستلام
                    </button>
                    
                    <p className="text-center text-gray-500 text-sm mt-4">
                        🔒 معلوماتك محمية بالكامل. سيتم التواصل معك خلال ساعات لتأكيد الطلب.
                    </p>
                </form>
            </div>
        </div>
    );
};