import { useState } from "react";

function ExperienceCard({ color, company, title, timespan, description }) {
    const [showText, setShowText] = useState(false);
    return (
        <div className="flex-1 px-4 my-4 py-0">
            <div
                className={`p-6 rounded-lg shadow-lg hover:cursor-pointer transition-transform duration-300 hover:scale-104`}
                style={{ backgroundColor: showText ? color : '#e5e7eb' }} // #e5e7eb is Tailwind's gray-200
                onClick={() => setShowText(prevState => !prevState)}
            >
                <p className={`lg:text-xl text-md font-bold ${showText ? 'text-black' : `text-[${color}]`}`}>{company}</p>
                <p className='text-black lg:text-md text-sm text-black'>{title} | {timespan}</p>
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