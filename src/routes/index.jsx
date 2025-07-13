import { createFileRoute } from "@tanstack/react-router";
import ExperienceCard from "../generic_components/ExperienceCard";
import { useEffect } from "react";

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
				Worked on business-facing applications using C#, HTML, CSS, JavaScript, and SQL in an agile environment.
				<ul>
					<li>
						Full-stack development for a help link system, granting users handy access to relevant documentation.
					</li>
					<li>
						Full-stack development for numerous APIs and web pages to support business functions.
					</li>
					<li>
						Sustain work for one of our business teams, studying the code and queries behind daily distributed reports in order to troubleshoot pressing production issues.
					</li>
					<li>
						Participated in daily standups, sprint retrospectives, sprint planning meetings, and other agile ceremonies.
					</li>
				</ul>
			</li>
			<li>
				Managed code releases to dev and production environments on an agile team during our transition to CI/CD.
				<ul>
					<li>
						Wrote a Python script to automatically package our APIs for releases, eliminating unnecessary manual work.
					</li>
					<li>
						Wrote a PowerShell script to generate SVN reports, giving clear tracking of code updates tied to releases.
					</li>
					<li>
						Participated in the establishment of Jenkins and BitBucket for automated builds and deployments.
					</li>
				</ul>
			</li>
		</ul>
	);

	const infocisionDescription = (
		<ul className="list-disc experience-card-description">
			<li>
				Software support of call center technology for the company’s largest client, as well as several other clients.
			</li>
			<li>
				Constructed several SSIS packages to transform and transfer data to SQL database tables regularly.
			</li>
			<li>
				Developed a full-stack web page using React, C#, .Net Framework API, and SQL stored procedures, which allowed users to manage billing codes and segments for one of our largest clients.
			</li>
		</ul>
	);

	const sylvanDescription = (
		<ul className="list-disc experience-card-description">
			<li>
				Improved asset offloading system that managed the listing, offers, and sale lifecycle, reducing mean time to sell.
			</li>
			<li>
				Contributed to an asset turnover system that reduced overhead by $4+ million per year.
			</li>
			<li>
				Redesigned a property media view, providing a feature-rich UI for viewing properties’ photos and videos.
			</li>
			<li>
				Implemented a project management system for the C-suite, allowing tracking of time and connected business processes for macro-level business initiatives.
			</li>
			<li>
				Technologies used include C#, .Net Core, React, HTML, CSS, JavaScript, Jenkins, Git, AWS, Docker, Microsoft SQL Server, and PostgreSQL.
			</li>
		</ul>
	);

	return (
		<div className="container">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
			<div className="header">
				<p className="hello-text text-blue">Hello!</p>
				<div className='header-text-container'>
					<p className="header-text">My name is <span className='text-green'>Zack Ulam.</span></p>
					<p className="header-text">I am a <span className='text-purple'>Fullstack Developer.</span></p>
				</div>
				<div className="link-container">
					<a href="https://www.linkedin.com/in/zack-ulam-605220132/" className="fa fa-linkedin fa-2x" target="_blank" />
					<a href="https://github.com/zulam" className=" fa fa-github fa-2x" target="_blank" />
					<a href="https://zulam.github.io/SubStar_Site" target="_blank" rel="noopener noreferrer">
						<img src="../../substar_icon_compressed_small.png" alt="Substar" style={{ width: '32px', height: '32px' }} />
					</a>
				</div>
			</div>
			<p className="experience-text mt-20">Experience</p>
			<div className="experience-container">
				<ExperienceCard color='blue' company='Sylvan Road' title='Full-Stack Developer' timespan='2021-2025' description={sylvanDescription} />
				<ExperienceCard color='green' company='Infocision' title='Lead Application Developer' timespan='2020-2021' description={infocisionDescription} />
				<ExperienceCard color='purple' company='Ally' title='Full-Stack Developer' timespan='2018-2019' description={allyDescription} />

			</div>
		</div>
	);
}