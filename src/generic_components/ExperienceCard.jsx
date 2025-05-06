import { useState } from "react";

function ExperienceCard({ color, company, title, timespan, description }) {
    const [showText, setShowText] = useState(false);
    return (
        <div className="experience-card-container">
            <div
                className={`experience-card ${showText ? `background-${color}` : 'background-grey'}`}
                onClick={() => setShowText(prevState => !prevState)}
            >
                <p className={`experience-card-company ${showText ? 'text-black' : `text-${color}`}`}>{company}</p>
                <p className='experience-card-title text-black'>{title} | {timespan}</p>
                <i className={`fa fa-arrow-down text-black ${showText ? '' : 'bounce'}`}></i>
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