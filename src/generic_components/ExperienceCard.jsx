import { useState } from "react";

function ExperienceCard({ color, company, title, timespan, description }) {
    const [showText, setShowText] = useState(false);
    return (
        <div className="flex-1 p-4">
            <div
                className={`${showText ? `bg-[${color}]` : 'bg-gray-200'} p-6 rounded-lg shadow-lg hover:cursor-pointer transition-transform duration-300 hover:scale-104`}
                onClick={() => setShowText(prevState => !prevState)}
            >
                <p className={`text-xl font-bold ${showText ? 'text-black' : `text-[${color}]`}`}>{company}</p>
                <p className='text-black text-md'>{title} | {timespan}</p>
                <i className={`fa fa-arrow-down text-black ${showText ? '' : 'animate-bounce'}`}></i>
                {showText && (
                    <>
                        {description}
                    </>
                )}
            </div>
        </div>
    )
}

export default ExperienceCard;