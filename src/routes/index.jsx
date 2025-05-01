import { createFileRoute } from "@tanstack/react-router";
import ExperienceCard from "../generic_components/ExperienceCard";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const allyDescription = (
		<ul className="list-disc ml-5 text-sm text-left">
			<li>
				Worked on business-facing applications using C#, HTML, CSS, JavaScript, and SQL in an agile environment.
				<ul className="list-disc ml-5">
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
				<ul className="list-disc ml-5">
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
		<ul className="list-disc ml-5 text-sm text-left">
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
		<ul className="list-disc ml-5 text-sm text-left">
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
		<div className="text-center">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
			<header className="min-h-screen items-center flex flex-col bg-linear-to-br from-[#24272e] to-black text-white">
				<div className="flex flex-col h-[200px] mt-30">
					<p className="text-[calc(10px+5vmin)] text-[#3a7dc9]">Hi!</p>
					<p className="text-[calc(10px+3vmin)]">My name is <span className='text-[#7fbc00]'>Zack Ulam.</span></p>
					<p className="text-[calc(10px+3vmin)]">I am a <span className='text-[#9c2a96]'>Fullstack Developer.</span></p>
					<div className='mt-2'>
						<a href="https://www.linkedin.com/in/zack-ulam-605220132/" className="fa fa-linkedin fa-2x mr-2 hover:cursor-pointer transition-transform duration-300 hover:scale-120" target="_blank" />
						<a href="https://github.com/zulam" className=" fa fa-github fa-2x ml-2 hover:cursor-pointer transition-transform duration-300 hover:scale-120" target="_blank" />
					</div>
				</div>
				<p className="text-[calc(10px+2vmin)] mt-20">Experiences</p>
				<div className="lg:flex sm:columns-1 sm:w-[95vw] overflowY-auto">
					<ExperienceCard color='#9c2a96' company='Ally' title='Full-Stack Developer' timespan='2018-2019' description={allyDescription} />
					<ExperienceCard color='#7fbc00' company='Infocision' title='Lead Application Developer' timespan='2020-2021' description={infocisionDescription} />
					<ExperienceCard color='#3a7dc9' company='Sylvan Road' title='Full-Stack Developer' timespan='2021-2025' description={sylvanDescription} />
				</div>
			</header>
		</div>
	);
}
