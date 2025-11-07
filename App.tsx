
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { ArticleHeader } from './components/ArticleHeader';
import { Testimonial } from './components/Testimonial';
import { Comment } from './components/Comment';
import { Countdown } from './components/Countdown';
import { OrderForm } from './components/OrderForm';
import { CtaButton } from './components/CtaButton';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { RefundPolicy } from './components/RefundPolicy';


// Updated image URLs as per user request
const WomanWithKneePain = 'https://imagescdn.netlify.app/a.webp';
const HappyOldCouple = 'https://imagescdn.netlify.app/b.webp';
const JointFlexProduct = 'https://imagescdn.netlify.app/c.webp';
const ArabDoctorPresentation = 'https://imagescdn.netlify.app/d.webp';


const App: React.FC = () => {
    const [stock, setStock] = useState(483);
    const [discount, setDiscount] = useState<number | null>(null);
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const [finalDiscounts, setFinalDiscounts] = useState<number[] | null>(null);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showRefund, setShowRefund] = useState(false);

    useEffect(() => {
        // Check session storage on initial load
        const storedChoice = sessionStorage.getItem('doorChoice');
        if (storedChoice) {
            try {
                const { index, discounts } = JSON.parse(storedChoice);
                setClickedIndex(index);
                setFinalDiscounts(discounts);
                setDiscount(50); // The winning discount is always 50%
            } catch (error) {
                console.error("Failed to parse door choice from sessionStorage", error);
                sessionStorage.removeItem('doorChoice');
            }
        }
    }, []);

    useEffect(() => {
        if (showPrivacy || showRefund) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [showPrivacy, showRefund]);

    const handleDiscountReveal = (index: number) => {
        if (clickedIndex !== null) return; // Prevent re-playing

        const otherDiscounts = [10, 25];
        // Shuffle for randomness
        otherDiscounts.sort(() => Math.random() - 0.5);
        
        const newDiscounts = [0, 0, 0];

        // The clicked door always gets 50%
        newDiscounts[index] = 50;

        // Assign the other discounts to the remaining doors
        let otherIndex = 0;
        for (let i = 0; i < 3; i++) {
            if (i !== index) {
                newDiscounts[i] = otherDiscounts[otherIndex];
                otherIndex++;
            }
        }

        setClickedIndex(index);
        setFinalDiscounts(newDiscounts);
        setDiscount(50);

        // Store the result in session storage
        sessionStorage.setItem('doorChoice', JSON.stringify({ index, discounts: newDiscounts }));

        // Scroll to the result
        const resultEl = document.getElementById('discount-result');
        if (resultEl) {
          setTimeout(() => {
            resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 800); // Wait for animation to finish
        }
    };
    
    const updateStock = useCallback(() => {
        setStock(prevStock => {
            if (prevStock > 420) {
                return prevStock - (Math.floor(Math.random() * 3) + 1);
            }
            return prevStock;
        });
    }, []);

    useEffect(() => {
        const stockInterval = setInterval(updateStock, Math.random() * 30000 + 20000);
        return () => clearInterval(stockInterval);
    }, [updateStock]);
    
    const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const form = document.getElementById('order-form');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollToDoors = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const doors = document.getElementById('door-game');
        if (doors) {
            doors.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
    
    const originalPrice = 1898;
    const finalPrice = 949;
    
    const summaryPoints = [
        "مكونات طبيعية 100% - كريم سريع المفعول وآمن تماماً",
        "نتائج مثبتة علمياً - 98% نسبة نجاح",
        `السعر اليوم: <span class="font-bold text-red-600 text-lg">${finalPrice} جنيه</span> بدلاً من <span class="line-through">${originalPrice} جنيه</span>`,
        "دفع عند الاستلام - لا مخاطرة عليك",
        "توصيل مجاني - لكل محافظات مصر",
        `${stock} عبوة فقط متبقية - اطلب قبل نفاد الكمية!`
    ];


    return (
        <>
            <Header />
            <main className="max-w-4xl mx-auto bg-white shadow-lg">
                <ArticleHeader />

                <div className="px-5 md:px-8 py-5 text-lg leading-relaxed text-gray-800">
                    
                    <p className="text-xl font-bold text-center p-4 bg-yellow-100 rounded-lg">هل تعلم أن 7 من كل 10 مصريين فوق سن الخمسين يستيقظون كل صباح مع ألم في المفاصل... وأن واحد من كل ثلاثة منهم على وشك فقدان القدرة على المشي نهائياً؟</p>
                    <p className="my-4">وإذا كنت واحداً من هؤلاء الملايين الذين يعانون من آلام الركبة أو الظهر أو المرفقين أو الكتفين... فإن ما سأكشفه لك في الدقائق القليلة القادمة قد يغير حياتك تماماً.</p>
                    <p className="my-4 font-bold">لكن قبل أن أبدأ، دعني أخبرك شيئاً مهماً جداً...</p>
                    
                    <div className="p-4 my-6 bg-gray-50 border-r-4 border-blue-500 rounded-md">
                        <p className="mb-2">ما سأشاركه معك اليوم ليس نظرية... وليس تجربة شخصية فقط... بل هو اكتشاف طبي أذهل آلاف الأطباء والمختصين في جميع أنحاء أوروبا والشرق الأوسط.</p>
                        <p className="mb-2">اكتشاف أثبت في التجارب السريرية أنه يمكنه استعادة صحة مفاصلك... حتى لو كنت تعاني من الألم لسنوات طويلة.</p>
                        <p>اكتشاف ساعد بالفعل أكثر من 98% من المرضى على التعافي الكامل والعودة إلى حياة طبيعية نشطة.</p>
                    </div>

                    <h2 className="text-3xl font-extrabold text-slate-800 my-6">لكن أولاً، دعني أسألك...</h2>
                    <ul className="list-disc list-inside space-y-2 mb-4 p-4 bg-red-50 rounded-lg">
                        <li>هل تشعر بألم في ركبتيك عندما تستيقظ من النوم؟</li>
                        <li>هل تسمع صوت طقطقة في مفاصلك عندما تتحرك؟</li>
                        <li>هل تجد صعوبة في صعود السلالم أو حتى النهوض من الكرسي؟</li>
                        <li>هل تعتمد على المسكنات كل يوم فقط لتتمكن من ممارسة حياتك الطبيعية؟</li>
                    </ul>
                    
                    <p className="my-4">إذا كانت إجابتك "نعم" على أي من هذه الأسئلة... فأنا أعلم بالضبط ما تمر به.</p>
                    <p className="my-4">أعلم كيف يسرق الألم منك كل لحظة سعادة. أعلم كيف تشعر عندما لا تستطيع اللعب مع أحفادك. أعلم كيف تشعر عندما لا تستطيع الذهاب إلى المسجد أو السوق أو حتى قضاء حاجتك بدون مساعدة. وأعلم أيضاً الخوف الذي يسيطر عليك كل ليلة... الخوف من أن تستيقظ غداً ولا تستطيع الحركة نهائياً.</p>

                    <img src={WomanWithKneePain} alt="امرأة تعاني من آلام في الركبة" className="w-full my-6 rounded-lg shadow-md" />
                    
                    <div className="bg-red-100 border-r-4 border-red-500 text-red-800 p-5 my-6 rounded-md shadow">
                        <strong className="text-xl block mb-2">الحقيقة المخيفة التي لا يعرفها معظم الناس...</strong>
                        <p>ألم المفاصل ليس مجرد "جزء طبيعي من التقدم في السن". إنه علامة تحذيرية على أن مفاصلك تتدمر من الداخل. وإذا لم تتصرف الآن... فإن ما ينتظرك ليس مجرد ألم أكثر، بل التهاب المفاصل المزمن، تشوه المفاصل الدائم، وفي النهاية... الإعاقة الكاملة والاعتماد المستمر على الآخرين في كل شيء.</p>
                    </div>

                    <h2 className="text-3xl font-extrabold text-slate-800 my-6">لماذا تفشل الحلول التقليدية؟</h2>
                    <p className="my-4"><strong>المسكنات؟</strong> تخفي الألم مؤقتاً وتدمر معدتك. <strong>الحقن؟</strong> مؤلمة ومكلفة ونتيجتها مؤقتة. <strong>العلاج الطبيعي؟</strong> قد يساعد قليلاً، لكنه لا يعالج السبب الجذري للمشكلة. <strong>الجراحة؟</strong> خطيرة ومكلفة جداً وبدون ضمانات.</p>
                    
                    <h2 className="text-3xl font-extrabold text-slate-800 my-6">إذن ما هو السبب الحقيقي لألم المفاصل؟</h2>
                    <p className="my-4">بعد سنوات من الأبحاث، اكتشف العلماء أن السبب الرئيسي هو تدمير الغضروف. الغضروف هو النسيج الناعم الذي يحمي عظامك ويسمح لمفاصلك بالحركة بسلاسة. لكن مع مرور الوقت، بسبب العمر والإجهاد والالتهابات... يبدأ هذا الغضروف في التآكل والتحلل. وعندما يحدث ذلك، تبدأ العظام بالاحتكاك ببعضها مباشرة. وهذا الاحتكاك هو ما يسبب الألم الشديد والالتهاب وفقدان الحركة.</p>

                    <img src={ArabDoctorPresentation} alt="طبيب عربي يشرح عن آلام المفاصل" className="w-full my-6 rounded-lg shadow-md" />
                    <p className="text-center text-sm text-gray-500 italic mt-2 mb-6">يشرح الطبيب مراحل تآكل الغضروف وتأثيره على المفاصل.</p>

                    <div className="bg-green-100 border-r-4 border-green-500 text-green-800 p-5 my-6 rounded-md shadow">
                        <strong className="block text-xl mb-2">الخبر الجيد: هناك حل!</strong>
                        <p>اكتشف العلماء أخيراً طريقة لمساعدة جسمك على إعادة بناء وإصلاح الغضروف التالف.</p>
                    </div>
                    
                    <h2 className="text-3xl font-extrabold text-slate-800 my-6">🔬 كيف يعمل Joint Flexi؟</h2>
                     <p className="mb-6">على عكس المسكنات العادية، يخترق كريم Joint Flexi الجلد ليصل مباشرة إلى المفصل، موصلاً 5 مكونات طبيعية قوية تعمل معاً بتناغم مذهل:</p>
                    
                    <div className="space-y-6">
                        <div className="bg-blue-50 border-r-4 border-blue-400 p-5 rounded-md">
                            <h3 className="font-bold text-xl text-blue-800 mb-2">1️⃣ كبريتات الجلوكوزامين</h3>
                            <p><strong>ما يفعله:</strong> هذا هو "حجر البناء" الأساسي للغضروف. يبدأ جسمك فوراً في استخدامه لإصلاح وإعادة بناء الغضروف التالف.</p>
                        </div>
                        <div className="bg-blue-50 border-r-4 border-blue-400 p-5 rounded-md">
                           <h3 className="font-bold text-xl text-blue-800 mb-2">2️⃣ كبريتات الكوندرويتين</h3>
                           <p><strong>ما يفعله:</strong> يعمل كدرع واقٍ يحيط بالغضروف ويمنع أي تدمير إضافي.</p>
                        </div>
                         <div className="bg-blue-50 border-r-4 border-blue-400 p-5 rounded-md">
                           <h3 className="font-bold text-xl text-blue-800 mb-2">3️⃣ مستخلص الكركم الطبيعي</h3>
                           <p><strong>ما يفعله:</strong> مضاد التهاب طبيعي قوي يحسن تدفق الدم إلى المفاصل، مما يسرع عملية الشفاء.</p>
                        </div>
                        <div className="bg-blue-50 border-r-4 border-blue-400 p-5 rounded-md">
                           <h3 className="font-bold text-xl text-blue-800 mb-2">4️⃣ MSM (ميثيل سولفونيل ميثان)</h3>
                           <p><strong>ما يفعله:</strong> يزيد من مرونة المفاصل ويقلل من التيبس الصباحي.</p>
                        </div>
                        <div className="bg-blue-50 border-r-4 border-blue-400 p-5 rounded-md">
                           <h3 className="font-bold text-xl text-blue-800 mb-2">5️⃣ البوسويليا سيراتا</h3>
                           <p><strong>ما يفعله:</strong> مستخلص طبيعي نادر يعمل كمضاد قوي للالتهاب والألم، وهو آمن تماماً.</p>
                        </div>
                    </div>
                    
                    <div className="bg-yellow-100 p-5 my-6 rounded-lg border-r-4 border-yellow-400">
                        <strong className="text-xl block mb-2">🔑 السر الحقيقي: التأثير التآزري</strong>
                        <p>الجديد هو الطريقة الفريدة التي يجمع بها Joint Flexi هذه المكونات معاً. فبدلاً من أن يعمل كل مكون بمفرده، تبدأ هذه المكونات في تعزيز وتقوية تأثير بعضها البعض، وهذا هو السبب في أن النتائج تظهر بسرعة مذهلة... في أقل من أسبوعين فقط!</p>
                    </div>

                    <h2 className="text-3xl font-extrabold text-slate-800 my-6">📊 نتائج مثبتة علمياً</h2>
                    <p className="my-4">في تجربة سريرية شملت أكثر من 1000 مريض يعانون من آلام مفاصل مزمنة، تم إعطاء نصفهم Joint Flexi والنصف الآخر دواء وهمي. النتائج كانت صادمة حتى للباحثين أنفسهم!</p>
                    <ul className="list-none space-y-3 p-6 bg-green-50 rounded-lg text-lg">
                        <li className="flex items-center"><span className="text-green-500 font-bold text-2xl mr-3">✅</span> <strong>بعد 14 يوماً فقط:</strong> 95% من المرضى شعروا بتحسن كبير في مستوى الألم.</li>
                        <li className="flex items-center"><span className="text-green-500 font-bold text-2xl mr-3">✅</span> <strong>87% منهم</strong> استعادوا قدرتهم على الحركة بشكل طبيعي.</li>
                        <li className="flex items-center"><span className="text-green-500 font-bold text-2xl mr-3">✅</span> <strong>وبعد شهر واحد:</strong> 98% تعافوا تماماً وعادوا إلى حياة نشطة كاملة!</li>
                    </ul>

                     <img src={HappyOldCouple} alt="زوجان كبيران في السن سعداء بعد الشفاء" className="w-full my-6 rounded-lg shadow-md" />

                    <h2 className="text-3xl font-extrabold text-slate-800 my-8 text-center">💬 قصص حقيقية من مصريين عادوا للحياة الطبيعية</h2>
                    <div className="space-y-6">
                        <Testimonial avatar="ف" name="فاطمة، 62 عاماً" location="القاهرة"
                            text={
                                <>
                                    <p>"لم أستطع صعود الدرج إلى شقتي في الطابق الثاني لأكثر من 3 سنوات. كنت أعتمد على ابنتي في كل شيء. شعرت أنني عبء على عائلتي."</p>
                                    <p>"لكن بعد أسبوعين فقط من Joint Flexi، استطعت صعود الدرج بمفردي! والآن، بعد شهر، أذهب للسوق وأطبخ لأحفادي وأشعر أنني عدت 20 سنة للخلف!"</p>
                                </>
                            }
                        />
                        <Testimonial avatar="ي" name="يوسف، 63 عاماً" location="الإسكندرية" 
                            text={
                                <>
                                    <p>"قال لي الطبيب أنني بحاجة لعملية جراحية في ركبتي. كنت خائفاً جداً. ابني أقنعني بتجربة Joint Flexi أولاً."</p>
                                    <p>"بعد 10 أيام فقط، اختفى التورم. بعد شهر، رجعت للطبيب وقال لي: لا تحتاج للعملية! حتى هو لم يصدق النتيجة!"</p>
                                </>
                            }
                        />
                         <Testimonial avatar="ن" name="نعيمة، 60 عاماً" location="الجيزة" 
                            text={
                                <>
                                    <p>"كنت أتناول 6 حبات مسكنات كل يوم. معدتي كانت تؤلمني من كثرة الأدوية. لم أكن أنام في الليل من الألم."</p>
                                    <p>"Joint Flexi غير حياتي تماماً. بعد أسبوع، توقفت عن المسكنات. بعد شهر، نسيت أنني كنت أعاني من الألم! الآن أستطيع الجلوس والوقوف والرقص في الأفراح دون أي ألم!"</p>
                                </>
                            }
                         />
                    </div>
                    
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8 my-8 rounded-xl text-center shadow-2xl">
                        <h3 className="text-4xl font-black mb-4">🌟 نقدم لكم Joint Flexi</h3>
                        <img src={JointFlexProduct} alt="Joint Flexi Cream" className="max-w-xs mx-auto my-6 block" />
                        <p className="text-xl mt-4">الكريم الوحيد الذي يعالج المشكلة من جذورها بمكونات طبيعية 100% تمتصها البشرة مباشرةً.</p>
                    </div>

                    <CtaButton onClick={scrollToDoors} />

                    <h2 className="text-3xl font-extrabold text-slate-800 my-6">⚠️ لماذا لم يخبرك طبيبك عن هذا؟</h2>
                    <div className="bg-red-100 border-r-4 border-red-500 text-red-800 p-5 my-6 rounded-md shadow">
                        <strong className="text-xl block mb-2">💰 الحقيقة المرة:</strong>
                        <p>صناعة الأدوية تساوي مليارات الجنيهات! إذا كنت تعاني من ألم مزمن، فأنت عميل دائم. من المفيد لهم أن تبقى مريضاً. لكن Joint Flexi يحل المشكلة من الجذور. بمجرد أن تتعافى مفاصلك، لن تحتاج المسكنات أو الحقن أو العمليات الجراحية بعد الآن.</p>
                    </div>

                    <div className="bg-yellow-100 border-r-4 border-yellow-400 text-yellow-800 p-5 my-8 rounded-md shadow text-center">
                        <h3 className="text-2xl font-bold mb-3">🎁 عرض خاص حصري للمصريين - لفترة محدودة جداً!</h3>
                        <p className="mb-4 text-lg">فقط حتى نهاية اليوم... يمكنك الحصول على Joint Flexi بخصم يصل إلى 50%!</p>
                        <Countdown />
                        <p className="mt-4 text-base">بعد انتهاء الوقت، سيعود السعر إلى {originalPrice} جنيه!</p>
                    </div>

                    <div className="bg-yellow-100 border-2 border-dashed border-yellow-500 p-5 my-8 rounded-lg text-center">
                        <p className="text-xl font-bold mb-2">⚠️ الكمية المتبقية للسوق المصري:</p>
                        <div className="text-5xl text-red-600 font-extrabold my-2">{stock}</div>
                        <p className="text-lg mt-2">عبوة فقط! <strong>بسبب الطلب الهائل والمكونات الطبيعية النادرة، تنفد الكمية بسرعة!</strong></p>
                    </div>

                    <div id="door-game" className="my-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">🎲 جرب حظك! اختر بابك واكتشف خصمك الحصري</h2>
                        <p className="text-lg mb-4 text-gray-600">👇 انقر على أي باب - قد تحصل على خصم 50%! 👇</p>
                        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                            {[0, 1, 2].map((index) => {
                                const isClicked = clickedIndex === index;
                                const hasPlayed = clickedIndex !== null;
                                const discountValue = finalDiscounts ? finalDiscounts[index] : null;

                                return (
                                    <div 
                                        key={index} 
                                        className={`door-container h-40 md:h-56 transition-transform 
                                            ${!hasPlayed ? 'hover:scale-105' : ''}
                                            ${hasPlayed && !isClicked ? 'opacity-70 scale-95' : ''}
                                            ${isClicked ? 'scale-110' : ''}`
                                        }
                                        onClick={() => handleDiscountReveal(index)}
                                    >
                                        {hasPlayed && !isClicked ? (
                                            <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-gray-400 to-gray-600 text-white rounded-lg">
                                                <div className="text-3xl font-bold">{discountValue}%</div>
                                                <div className="text-sm">خصم</div>
                                            </div>
                                        ) : (
                                            <div className={`door-inner ${isClicked ? 'is-flipped' : ''}`}>
                                                <div className="door-front">
                                                    <div className="door-emoji">🚪</div>
                                                    <div className="door-text">الباب {index + 1}</div>
                                                </div>
                                                <div className="door-back">
                                                    <div className="reward-text">{discountValue}%</div>
                                                    <div className="reward-label">خصم</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                        {discount !== null && (
                            <div id="discount-result" className="mt-8 p-6 bg-gradient-to-br from-pink-500 to-red-500 text-white rounded-lg shadow-xl max-w-md mx-auto">
                                <h3 className="text-3xl font-black mb-2">🎉 مبروك!</h3>
                                <p className="text-2xl mb-3">حصلت على خصم <span className="font-bold">50</span>%!</p>
                                <p className="text-3xl font-bold"><del className="opacity-70 text-2xl">{originalPrice} جنيه</del> <span className="text-yellow-300">{finalPrice}</span> جنيه فقط!</p>
                            </div>
                        )}
                    </div>
                    
                    {discount !== null && (
                        <a href="#order-form" onClick={scrollToForm} className="block w-full text-center bg-gradient-to-r from-pink-500 to-red-600 text-white text-2xl md:text-3xl font-extrabold py-5 px-8 rounded-xl shadow-lg hover:scale-105 transition-transform animate-pop-in">
                            🛒 اطلب الآن بخصم 50%
                        </a>
                    )}

                    {/* Enhanced Guarantee Section with Badges */}
                    <div className="my-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 shadow-lg">
                        <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">🛡️ ضماناتنا الحصرية لك</h3>
                        
                        {/* Guarantee Badges Grid */}
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            {/* 30 Days Money Back */}
                            <div className="bg-white p-4 rounded-lg shadow-md border-2 border-green-300 text-center">
                                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                    30
                                </div>
                                <h4 className="font-bold text-green-800 mb-1">ضمان الاسترداد</h4>
                                <p className="text-sm text-green-700">30 يوماً لاسترداد المبلغ</p>
                            </div>

                            {/* Cash on Delivery */}
                            <div className="bg-white p-4 rounded-lg shadow-md border-2 border-blue-300 text-center">
                                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl">
                                    💳
                                </div>
                                <h4 className="font-bold text-blue-800 mb-1">دفع عند الاستلام</h4>
                                <p className="text-sm text-blue-700">لا تدفع إلا عند الاستلام</p>
                            </div>

                            {/* Free Shipping */}
                            <div className="bg-white p-4 rounded-lg shadow-md border-2 border-purple-300 text-center">
                                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl">
                                    🚚
                                </div>
                                <h4 className="font-bold text-purple-800 mb-1">توصيل مجاني</h4>
                                <p className="text-sm text-purple-700">لجميع محافظات مصر</p>
                            </div>
                        </div>

                        {/* Detailed Guarantee Text */}
                        <div className="bg-white p-6 rounded-lg border border-green-200">
                            <h4 className="text-xl font-bold text-green-800 mb-3 text-center">✅ لا توجد مخاطرة عليك على الإطلاق!</h4>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3 space-x-reverse">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                                    <div>
                                        <strong className="text-green-800">ضمان 30 يوماً لاسترداد النقود:</strong>
                                        <p className="text-green-700 mt-1">إذا لم تحصل على النتائج المطلوبة خلال 30 يوماً، سنسترد لك المبلغ كاملاً بدون أسئلة.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3 space-x-reverse">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                                    <div>
                                        <strong className="text-blue-800">الدفع عند الاستلام:</strong>
                                        <p className="text-blue-700 mt-1">لن تدفع أي شيء الآن. فقط اطلب المنتج، وعندما يصلك، افحصه وتأكد أنه أصلي، وبعدها فقط ادفع للمندوب.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3 space-x-reverse">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                                    <div>
                                        <strong className="text-purple-800">ضمان الجودة والأصالة:</strong>
                                        <p className="text-purple-700 mt-1">منتج أصلي 100% مع شهادة جودة. إذا لم تكن راضياً تماماً لأي سبب، فلا تستلمه ولن تدفع قرشاً واحداً.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-6 text-center">
                            <p className="text-green-800 font-bold text-lg">🔒 كل المخاطرة علينا - وليس عليك!</p>
                            <div className="flex justify-center items-center space-x-4 space-x-reverse mt-3 text-sm text-green-600">
                                <span>🏆 أكثر من 10,000 عميل راضٍ</span>
                                <span>⭐ تقييم 4.9/5</span>
                                <span>🇪🇬 صنع للسوق المصري</span>
                            </div>
                        </div>
                    </div>

                     <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-red-50 border-2 border-red-400 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-red-800 mb-3">❌ الخيار الأول: لا تفعل شيئاً</h3>
                            <ul className="space-y-2 list-inside list-[disclosure-group] text-red-700">
                                <li>الألم سيزداد سوءاً</li>
                                <li>الغضروف سيستمر في التآكل</li>
                                <li>ستصبح عبئاً على عائلتك</li>
                                <li>ستواجه الإعاقة الدائمة</li>
                            </ul>
                        </div>
                         <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-green-800 mb-3">✅ الخيار الثاني: اطلب Joint Flexi الآن</h3>
                            <ul className="space-y-2 list-inside list-[disclosure-group] text-green-700">
                                <li>ستتخلص من الألم إلى الأبد</li>
                                <li>ستستعيد حركتك وحريتك</li>
                                <li>ستلعب مع أحفادك مرة أخرى</li>
                                <li>ستعيش حياة نشطة وصحية</li>
                            </ul>
                        </div>
                    </div>
                     <p className="text-center font-bold text-xl my-6">لا تضيع هذه الفرصة. كل ما عليك هو أن تعطي لنفسك فرصة للتعافي.</p>

                </div>
                 <div className="p-6 bg-gray-50">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-extrabold text-slate-800 mb-4">ملخص العرض</h3>
                         <div className="bg-white p-6 rounded-lg shadow-md border text-gray-800 text-right">
                            {summaryPoints.map((item, index) => (
                                <div key={index} className={`flex justify-between items-center py-3 ${index !== summaryPoints.length - 1 ? 'border-b' : ''}`}>
                                    {item.includes('<span') ? (
                                        <p className="text-left" dangerouslySetInnerHTML={{ __html: item }} />
                                    ) : (
                                        <p>{item}</p>
                                    )}
                                    <span className="text-green-500 text-2xl flex-shrink-0 ml-4">✓</span>
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>

                <OrderForm />
            </main>

            <div className="bg-gray-100 py-8 px-5">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">💬 التعليقات (194)</h3>
                    <div className="space-y-5">
                        <Comment
                            avatar="ع"
                            name="عائشة محمد - القاهرة"
                            time="منذ 12 دقيقة"
                            text="والله المقال ده كأنه بيتكلم عني بالضبط! كل يوم باصحى وركبتي بتوجعني لدرجة إني مبقاش قادرة أنزل من السرير غير بعد نص ساعة. بقالي 7 سنين على الحالة دي. هطلب دلوقتي وربنا يستر 🤲"
                            likes={47}
                        />
                        <Comment
                            avatar="ي"
                            name="يوسف السيد - الإسكندرية"
                            time="منذ 17 دقيقة"
                            text="أنا جربت الكريم ده من شهرين تقريباً. والله العظيم حياتي اتغيرت! كنت بروح دكتور كل أسبوع وبصرف على الأدوية 500-600 جنيه كل شهر. دلوقتي وقفت كل الأدوية ومبقاش عندي أي ألم. شكراً Joint Flexi! 🙏"
                            likes={89}
                        />
                        <Comment
                            avatar="ف"
                            name="فاطمة حسين - فاس"
                            time="منذ 19 دقيقة"
                            text="بصراحة كنت متشككة في الأول. بس لما شفت إن الدفع عند الاستلام قلت خسارة إيه؟ والحمد لله النتيجة فاقت كل التوقعات! ظهري اللي كان بيوجعني من 3 سنين دلوقتي بقى زي الحرير بعد ما استخدمت الكريم. ربنا يبارك فيكم 💚"
                            likes={62}
                        />
                        <Comment
                            avatar="م"
                            name="موسى عبد الله - أسيوط"
                            time="منذ 24 دقيقة"
                            text="أنا عندي 54 سنة وكنت بشتغل في الزراعة. كتافي ومرافقي والركب كلها كانت مدمرة. استخدمت Joint Flexi شهر ونص والحمد لله رجعت أشتغل عادي. حتى بقيت ألعب كورة مع ولادي! منتج محترم فعلاً 👍"
                            likes={103}
                        />
                        <Comment
                            avatar="ن"
                            name="نعيمة السيد - المنصورة"
                            time="منذ 28 دقيقة"
                            text="يا جماعة أنا طلبت 3 عبوات من أسبوع. وصلني المنتج في يومين بس! والحمد لله بديت استخدمه من 5 أيام ولاحظت فرق كبير. الألم خف بنسبة 60-70% تقريباً. أول مرة أنام من غير ما آخد مسكنات! متحمسة أشوف النتيجة بعد أسبوعين 😊"
                            likes={71}
                        />
                         <Comment
                            avatar="خ"
                            name="خالد مصطفى - دمياط"
                            time="منذ ساعة"
                            text="سؤال: المنتج ده بيتباع في الصيدليات ولا لازم أطلبه من هنا بس؟ وكام يوم بياخد لحد ما يوصل دمياط؟"
                            likes={12}
                        />
                         <Comment
                            isReply={true}
                            avatar="👨‍⚕️"
                            name="فريق Joint Flexi - الدعم الفني"
                            time="منذ 55 دقيقة"
                            text="@خالد مصطفى - أهلاً يا أستاذ خالد! Joint Flexi غير متوفر في الصيدليات لأننا نبيع مباشرة من المصنع للمستهلك (عشان نوفر السعر). التوصيل لدمياط عادةً بياخد 2-3 أيام بس. الدفع عند الاستلام، يعني مفيش أي مخاطرة. اطلب بثقة! 😊"
                            likes={45}
                        />
                         <Comment
                            avatar="ر"
                            name="رشا علي - القاهرة"
                            time="منذ ساعة و 10 دقائق"
                            text="أمي عندها 68 سنة ومكنتش قادرة تمشي من الألم. كانت قاعدة على الكرسي طول اليوم. شفت الإعلان ده وطلبت لها 2 عبوة. بعد أسبوع ونص بدأت تمشي في البيت براحة! دلوقتي بقالها شهر وبقت تنزل تقعد قدام العمارة وتتكلم مع الجيران. فرحتي مش طبيعية لما شفتها ترجع لحياتها الطبيعية ❤️"
                            likes={156}
                        />
                         <Comment
                            avatar="ع"
                            name="عماد حسن - سوهاج"
                            time="منذ ساعة و 15 دقيقة"
                            text="أنا عندي سؤال: هل المنتج ده آمن لمرضى السكر والضغط؟ أنا عندي السكر والضغط وباخد أدوية ليهم بانتظام."
                            likes={23}
                         />
                         <Comment
                            isReply={true}
                            avatar="👨‍⚕️"
                            name="فريق Joint Flexi - الدعم الفني"
                            time="منذ ساعة و 8 دقائق"
                            text="@عماد حسن - أهلاً يا أستاذ عماد! نعم، Joint Flexi آمن تماماً لمرضى السكر والضغط لأنه مكون من مواد طبيعية 100% ويستخدم موضعياً. لكن دائماً الأفضل إنك تستشير دكتورك الخاص قبل استخدام أي منتج جديد. 👍"
                            likes={67}
                        />
                    </div>
                    <CtaButton onClick={scrollToForm} />
                </div>
            </div>
            
            <Footer onShowPrivacy={() => setShowPrivacy(true)} onShowRefund={() => setShowRefund(true)} />

            {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
            {showRefund && <RefundPolicy onClose={() => setShowRefund(false)} />}
        </>
    );
};

export default App;
