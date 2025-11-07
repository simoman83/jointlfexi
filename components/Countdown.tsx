import React, { useState, useEffect } from 'react';

const calculateTimeLeft = () => {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);
    
    const difference = endOfDay.getTime() - now.getTime();
    
    let timeLeft = {
        hours: '00',
        minutes: '00',
        seconds: '00'
    };
    
    if (difference > 0) {
        timeLeft = {
            hours: Math.floor(difference / (1000 * 60 * 60)).toString().padStart(2, '0'),
            minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
            seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0')
        };
    }
    
    return timeLeft;
};

export const Countdown: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        
        return () => clearTimeout(timer);
    });

    return (
        <div className="flex justify-center gap-4 my-4">
            <div className="text-center">
                <div className="bg-black bg-opacity-20 text-white text-4xl font-bold p-4 rounded-lg min-w-[70px]">{timeLeft.hours}</div>
                <div className="text-sm mt-1 text-slate-700">ساعة</div>
            </div>
            <div className="text-center">
                <div className="bg-black bg-opacity-20 text-white text-4xl font-bold p-4 rounded-lg min-w-[70px]">{timeLeft.minutes}</div>
                <div className="text-sm mt-1 text-slate-700">دقيقة</div>
            </div>
            <div className="text-center">
                <div className="bg-black bg-opacity-20 text-white text-4xl font-bold p-4 rounded-lg min-w-[70px]">{timeLeft.seconds}</div>
                <div className="text-sm mt-1 text-slate-700">ثانية</div>
            </div>
        </div>
    );
};