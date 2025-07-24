function ExperienceCard({ color, company, title, timespan, description, active, expanded }) {
    return (
        <div className="experience-card-container">
            <div
                className={`experience-card ${expanded ? `background-${color}` : 'background-grey'}`}
                style={{ backgroundColor: 'rgb(255, 253, 248)' }}
            >
                <p className={`experience-card-company ${expanded ? 'text-black' : `text-${color}`}`}>{company}</p>
                <p className='experience-card-title text-black'>{title} | {timespan}</p>
                <i className={`fa fa-arrow-down text-black ${(active && !expanded) ? 'bounce' : ''}`}></i>
                {expanded && (
                    <div className='text-black'>
                        {description}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ExperienceCard;