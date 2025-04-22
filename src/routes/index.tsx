import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const [showText1, setShowText1] = useState(false);
	const [showText2, setShowText2] = useState(false);
	const [showText3, setShowText3] = useState(false);

	return (
		<div className="text-center">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
			<header className="min-h-screen items-center flex flex-col justify-center bg-[#24272e] text-white">
				<div className='h-[70h]'>
					<p className="text-[calc(10px+5vmin)] text-[#3a7dc9]">Welcome!</p>
					<p className="text-[calc(10px+3vmin)]">My name is <span className='text-[#7fbc00]'>Zack Ulam.</span></p>
					<p className="text-[calc(10px+3vmin)]">I am a <span className='text-[#9c2a96]'>Fullstack Developer.</span></p>
				</div>
				<div className='mt-2'>
					<a href="https://www.linkedin.com/in/zack-ulam-605220132/" className="fa fa-linkedin fa-2x mr-2" target="_blank" />
					<a href="https://github.com/zulam" className=" fa fa-github fa-2x ml-2" target="_blank" />
				</div>
				<p className="text-[calc(10px+2vmin)] mt-20">Experiences</p>
				<div className="h-[30vh] flex flex-wrap lg:w-[75vw] md:w-[90vw]">
					<div className="flex-1 p-4">
						<div
							className={`${showText1 ? 'bg-[#9c2a96]' : 'bg-gray-200'} p-6 rounded-lg shadow-lg`}
							onMouseEnter={() => setShowText1(true)}
							onMouseLeave={() => setShowText1(false)}
						>
							<p className={`text-xl font-bold ${showText1 ? 'text-black' : 'text-[#9c2a96]'}`}>Ally</p>
							<p className='text-black'>2018-2019</p>
							{showText1 && (
								<p className={`${showText1 ? 'text-white' : 'text-gray-700'}`}>
									Full-stack web developer using .NET and standard web stack.
								</p>
							)}
						</div>
					</div>
					<div className="flex-1 p-4" >
						<div
							className={`${showText2 ? 'bg-[#7fbc00]' : 'bg-gray-200'} p-6 rounded-lg shadow-lg`}
							onMouseEnter={() => setShowText2(true)}
							onMouseLeave={() => setShowText2(false)}
						>
							<p className={`text-xl font-bold ${showText2 ? 'text-black' : 'text-[#7fbc00]'}`}>Infocision</p>
							<p className='text-black'>2020-2021</p>
							{showText2 && (
								<p className={`${showText2 ? 'text-white' : 'text-gray-700'}`}>
									Developer for call center technologies using .NET.
								</p>
							)}
						</div>
					</div>
					<div className="flex-1 p-4">
						<div
							className={`${showText3 ? 'bg-[#3a7dc9]' : 'bg-gray-200'} p-6 rounded-lg shadow-lg`}
							onMouseEnter={() => setShowText3(true)}
							onMouseLeave={() => setShowText3(false)}
						>
							<p className={`text-xl font-bold ${showText3 ? 'text-black' : 'text-[#3a7dc9]'}`}>Sylvan Road</p>
							<p className='text-black'>2021-2025</p>
							{showText3 && (
								<p className={`${showText3 ? 'text-white' : 'text-gray-700'}`}>
									Full-stack web developer using .NET Core and React.
								</p>
							)}
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}
