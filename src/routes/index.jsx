import { createFileRoute } from "@tanstack/react-router";
import ExperienceCard from "../generic_components/ExperienceCard";
import React, { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	useEffect(() => {
		document.title = "Zack Ulam";
	}, []);

	const allyDescription = (
		<ul className="list-disc experience-card-description">
			<li>
				Delivered full-stack solutions for business-facing applications using C#, JavaScript, and SQL.
			</li>
			<li>
				Developed a dynamic help link system to provide context-aware documentation access.

			</li>
			<li>
				Built and maintained internal APIs and dashboards to support enterprise business processes.
			</li>
			<li>
				Automated build and deployment workflows using Jenkins, Bitbucket, and CI/CD pipelines.
			</li>
			<li>
				Authored PowerShell and Python scripts to optimize release and reporting processes.
			</li>
			<li>
				Tech Stack: C#, JavaScript, HTML/CSS, SQL Server, Python, PowerShell, Jenkins, SVN, Bitbucket.
			</li>
		</ul>
	);

	const infocisionDescription = (
		<ul className="list-disc experience-card-description">
			<li>
				Maintained and enhanced core call center systems for the company’s largest client and others.
			</li>
			<li>
				Created SSIS packages for automated ETL operations, ensuring accurate and timely data ingestion.
			</li>
			<li>
				Developed a React and .NET Framework web interface for managing billing codes and segmentation rules.
			</li>
			<li>
				Tech Stack: C#, .NET Framework, SQL Server, SSIS, React.
			</li>
		</ul>
	);

	const sylvanDescription = (
		<ul className="list-disc experience-card-description">
			<li>
				Proposed and redesigned an entity notes system, allowing for dynamic logging for various domain entities.
			</li>
			<li>
				Led UI development of the asset offloading platform, significantly reducing time-to-sale.
			</li>
			<li>
				Co-developed an asset turnover system, resulting in $4M+ in annual overhead reduction.
			</li>
			<li>
				Redesigned the property media viewer to deliver a dynamic UI for managing and displaying media assets.
			</li>
			<li>
				Spearheaded a C-suite project management dashboard to track time and integrate high-level business initiatives.
			</li>
			<li>
				Tech Stack: C#, .NET Core, ReactJS, HTML/CSS, SQL Server, PostgreSQL, AWS, Docker, Jenkins, Git.
			</li>
		</ul>
	);

	const subStarDescription = (
		<ul className="list-disc experience-card-description">
			<li>
				Planned, designed, and developed an intuitive substitution management app for youth soccer coaches.
			</li>
			<li>
				Currently in testing, pending release to Google Play Store in August 2025.
			</li>
			<li>
				Technologies used include React Native, Gradle, Android Studio, and VS Code.

			</li>
		</ul>
	);


	// ...existing code...
	const [randomShape, setRandomShape] = useState(null);

	useEffect(() => {
		const colors = ['#FFD600', 'rgb(255, 39, 39)', 'black', 'rgba(36, 142, 255, 1)']; // yellow from experience-cards, red, black, blue
		const shapes = ['circle', 'triangle', 'square'];
		const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

		const renderShape = () => {
			const color = getRandom(colors);
			const shape = getRandom(shapes);
			const size = 120;
			if (shape === 'circle') {
				return <svg width={size} height={size}><circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} /></svg>;
			} else if (shape === 'square') {
				return <svg width={size} height={size}><rect width={size} height={size} fill={color} /></svg>;
			} else if (shape === 'triangle') {
				return <svg width={size} height={size}><polygon points={`${size / 2},0 0,${size} ${size},${size}`} fill={color} /></svg>;
			}
		};

		// Show a shape immediately
		setRandomShape(renderShape());

		const interval = setInterval(() => {
			setRandomShape(renderShape());
		}, 1500);
		return () => clearInterval(interval);
	}, []);


	// Carousel and expand state
	const experienceData = [
		{ color: 'substar', company: 'SubStar', title: 'Owner', timespan: '2025-Present', description: subStarDescription },
		{ color: 'blue', company: 'Sylvan Road', title: 'Full-Stack Developer', timespan: '2021-2025', description: sylvanDescription },
		{ color: 'green', company: 'Infocision', title: 'Lead Application Developer', timespan: '2020-2021', description: infocisionDescription },
		{ color: 'purple', company: 'Ally', title: 'Full-Stack Developer', timespan: '2018-2019', description: allyDescription },
	];
	const [carouselIndex, setCarouselIndex] = useState(0);
	const [expandedIndex, setExpandedIndex] = useState(null);

	const handlePrev = () => {
		setCarouselIndex((prev) => {
			const newIdx = (prev - 1 + experienceData.length) % experienceData.length;
			if (expandedIndex === prev) setExpandedIndex(newIdx);
			return newIdx;
		});
	};
	const handleNext = () => {
		setCarouselIndex((prev) => {
			const newIdx = (prev + 1) % experienceData.length;
			if (expandedIndex === prev) setExpandedIndex(newIdx);
			return newIdx;
		});
	};
	const handleExpand = (idx) => setExpandedIndex(expandedIndex === idx ? null : idx);

	// Helper to get indices for prev, current, next
	const getCarouselIndices = () => {
		const prev = (carouselIndex - 1 + experienceData.length) % experienceData.length;
		const next = (carouselIndex + 1) % experienceData.length;
		return [prev, carouselIndex, next];
	};

	return (
		<div className="container">
			<div id='container'>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
				<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
					<div className="header">
						<p className="hello-text text-blue">Hello!</p>
						<div className='header-text-container'>
							<p className="header-text">My name is <span className='text-green'>Zack Ulam.</span></p>
							<p className="header-text">I am a <span className='text-purple'>Fullstack Engineer.</span></p>
						</div>
						<div className="link-container">
							<a href="https://www.linkedin.com/in/zack-ulam-605220132/" className="linkedin-icon fa fa-linkedin fa-3x" target="_blank" />
							<a href="https://github.com/zulam" className="github-icon fa fa-github fa-3x" target="_blank" />
							<a href="https://zulam.github.io/SubStar_Site" target="_blank" rel="noopener noreferrer">
								<img src="/substar_icon_compressed_small.png" alt="Substar" style={{
									width: '48px',
									height: '48px',
									borderRadius: '8px',
								}} />
							</a>
						</div>
					</div>
					<div className='random-shapes' style={{ marginInline: '30px' }}>
						{randomShape}
					</div>
				</div>
				<div className="experience-carousel" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '100px', maxWidth: '80vw', width: '800px', overflow: 'hidden' }}>
					<button onClick={handlePrev} style={{ fontSize: 32, background: 'none', border: 'none', cursor: 'pointer', color: '#888', zIndex: 2 }} aria-label="Previous Experience">&#8592;</button>
					<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '0', width: '100%' }}>
						{getCarouselIndices().map((idx) => {
							const isCenter = idx === carouselIndex;
							const isSide = !isCenter;
							return (
								<div
									key={idx}
									className={isSide ? 'carousel-side-item' : 'carousel-center-item'}
									onClick={isCenter ? () => handleExpand(idx) : undefined}
									style={{
										width: '33.3%',
										transition: 'all 0.2s',
										cursor: isCenter ? 'pointer' : 'default',
										padding: '0px',
										opacity: isCenter ? 1 : 0.7,
										zIndex: isCenter ? 2 : 1,
										transform: isCenter ? 'scale(1.08)' : 'scale(0.92)',
										overflow: 'hidden',
										pointerEvents: isCenter ? 'auto' : 'none',
									}}
								>
									<ExperienceCard
										color={experienceData[idx].color}
										company={experienceData[idx].company}
										title={experienceData[idx].title}
										timespan={experienceData[idx].timespan}
										description={null}
										active={isCenter}
										expanded={expandedIndex === idx}
									/>
								</div>
							);
						})}
					</div>
					<button onClick={handleNext} style={{ fontSize: 32, background: 'none', border: 'none', cursor: 'pointer', color: '#888', zIndex: 2 }} aria-label="Next Experience">&#8594;</button>
				</div>
				<div className='description-container' style={{ color: '#333', display: 'flex', justifyContent: 'center' }}>
					{expandedIndex !== null && (
						<p style={{ fontSize: '30px' }}>{experienceData[expandedIndex].description}</p>
					)}
				</div>
			</div>
		</div >
	);
}