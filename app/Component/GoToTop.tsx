'use client'
import { useEffect, useState, useCallback } from "react";

const GoToTop = () => {
    const [isScroll, setIsScroll] = useState(false);

    const handleScroll = useCallback(() => {
        if (window.scrollY > 30) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    }, []);

    useEffect(() => {
 
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]); 

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Cuộn mượt mà
        });
    };

    return (
        <div 
            className={`
                fixed bottom-9 right-5 w-16 h-16 cursor-pointer transition-opacity duration-300
                ${isScroll ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
            onClick={scrollToTop}
        >
            <div className="absolute top-0 left-0 w-full h-full animate-ping rounded-full bg-blue-500 opacity-75"></div>
            
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-500 flex items-center justify-center z-10 shadow-lg">
                <i className="text-white text-2xl fa-solid fa-up-long"></i>
            </div>
        </div>
    );
};

export default GoToTop;