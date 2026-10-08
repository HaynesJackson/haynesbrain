import { useState, useEffect, useRef } from 'react';

function TimelineItem ({ month, year, title, description, side }) {
    const itemRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);


    const content = (
        <div>
            <p><span className="text-sm text-gray-400">{month}</span> <span className="text-sm text-gray-500">{year}</span></p>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );

    useEffect(() => {
        const observer = new IntersectionObserver (
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.05}
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);

    return (
        <div ref={itemRef} className={`flex gap-6 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex-1 text-right pb-10">
                {side === 'l' && content}
            </div>
            <div className="flex flex-col items-center translate-y-15">
                <div className={`w-4 h-4 rounded-full transition-colors duration-500 ${isVisible ? 'bg-purple-500' : 'bg-gray-800'}`} />
                <div className="w-0.5 flex-1 bg-gray-700">
                    <div className={`w-0.5 absolute h-full origin-top bg-purple-700 ${isVisible ? 'scale-y-100' : 'scale-y-0'} transition-transform duration-1000`} />
                </div>
            </div>
            <div className="flex-1 text-left pb-10">
                {side === 'r' && content}
            </div>
        </div>
    );
}

export default TimelineItem;