import React, {ReactNode} from 'react';
import Image from "next/image";
import type {NextPage} from 'next';
import type {IconType} from 'react-icons';
import {
	SiGithub,
	SiGit,
	SiPython,
	SiJava,
	SiCplusplus,
	SiMongodb,
	SiNextdotjs as SiNextDotJs,
	SiNodedotjs as SiNodeDotJs,
	SiPostgresql,
	SiReact,
	SiTailwindcss,
	SiAntdesign,
	SiTypescript,
	SiWebpack,
	SiYarn,
} from 'react-icons/si';
import {age} from "../utils/time";
import flow from "../../public/flow.jpeg";

const Home: NextPage = () => (
	<div>
		<WhoAmI/>
		<WhatImDoing />
		<Projects />
		<Technologies />
	</div>
	);

const WhoAmI = () => (
	<div className="mb-10">
		<h1 className="mb-3 text-5xl font-bold">
			Hey, I'm{' '}
			<span className="text-sky-500 underline">Nickholas</span>!
		</h1>
		<p className="leading-relaxed opacity-80">I'm a {age} year old software developer residing in Cypress, California.{" "}
			I've been developing software for over {age - 18} years now, and am passionate about creating scalable and efficient systems.{" "}
			I am mainly focused in full-stack developement, with experience in creating web and desktop apps.
		</p>
	</div>
);

const WhatImDoing = () => (
	<div className="mb-10">
		<h1 className="mb-3 text-3xl font-bold">What I'm doing</h1>
		<p className="leading-relaxed opacity-80">I'm currently studying at{" "}
			<a href="https://www.csulb.edu/" className="text-slate-400 underline">California State University, Long Beach</a>{" "}
			and am in the process of earning my Bachelor's degree in Computer Science. I'm also working at{" "}
			<a href="https://gizmo.solutions/" className="text-slate-400 underline">Gizmo</a>{" "}
			building Flow, a chrome extension tailored to help aid in purchasing streetwear, sneakers, and NFTs through automated scripts.{" "}
			I started Gizmo as a small project in 2019, creating simple web-scrapers for sites like Twitter, Supreme and Shopify for personal use,
			but has since grown into a successful business, reaching tens of thousands of customers.
		</p>
	</div>
);

const Projects = () => {
	const privateProjects = ['Flow', 'Social Monitors'];
	const publicProjects = ['personal-site'];
	return (
		<div className="mb-10">
			<div className="mb-3">
				<h1 className="mb-3 text-3xl font-bold">Projects</h1>
				<p className="leading-relaxed opacity-80">Some of my current and past projects. For those that are private, you can read more about them in my{" "}
					<a href="/devlog" className="text-slate-400 underline">
						Devlog
					</a>!
				</p>
			</div>
			<div className="grid grid-cols-2 gap-3">
				{privateProjects.map(title => (
					<PrivateProject key={title} title={title} />
				))}
				{publicProjects.map(title => (
					<PublicProject key={title} title={title} />
				))}
			</div>
		</div>
);
	};

const PrivateProject = ({title}: {title: string}) => (
	<div className="bg-gradient-to-tr from-white/5 to-slate-400/5 rounded-lg border border-white/10">
		<button type="button" className="flex items-center py-4 px-5 font-bold">
			<div className="flex flex-1 items-center w-full text-left">
				<div className="w-8 h-8"><Image className="rounded-lg" src={flow} alt="flow-img" /></div>
				<span className="pl-3">{title}</span>
			</div>
			{/* <FaArrowRight className="w-5 h-5 text-slate-400" /> */}
		</button>
	</div>
);

const PublicProject = ({title}: {title: string}) => (
	<div className="bg-gradient-to-tr from-white/5 to-slate-400/5 rounded-lg border border-white/10">
		<button type="button" className="flex items-center py-4 px-5 font-bold">
			<div className="flex flex-1 items-center w-full text-left">
				<SiGithub className="w-8 h-8 text-slate-400" />
				<span className="pl-3">{title}</span>
				<span className="pl-3">⭐</span>
				<span className="pl-3 font-normal">3</span>
			</div>
			{/* <FaArrowRight className="w-5 h-5 text-slate-400" /> */}
		</button>
	</div>
);

const Technologies = () => (
	<div>
		<div className="mb-3">
			<h1 className="mb-3 text-3xl font-bold">Technologies</h1>
			<p className="leading-relaxed opacity-80">I use a wide variety of technologies to aid me in building efficient software, as well as to{" "}
				help overcome obstacles I face along the way. I find learning new things enjoyable and it's what helps me stay driven and motivated as a developer.
			</p>
		</div>
		<ul className="grid grid-cols-5 gap-5">
			<ListItem text="Node.js" icon={SiNodeDotJs}/>
			<ListItem text="Typescript" icon={SiTypescript}/>
			<ListItem text="React.js" icon={SiReact}/>
			<ListItem text="Next.js" icon={SiNextDotJs}/>
			<ListItem text="Python" icon={SiPython}/>
			<ListItem text="Java" icon={SiJava}/>
			<ListItem text="C++" icon={SiCplusplus}/>
			<ListItem text="Mongo" icon={SiMongodb}/>
			<ListItem text="Postgres" icon={SiPostgresql}/>
			<ListItem text="Yarn" icon={SiYarn}/>
			<ListItem text="Webpack" icon={SiWebpack}/>
			<ListItem text="Ant Design" icon={SiAntdesign}/>
			<ListItem text="TailwindCSS" icon={SiTailwindcss}/>
			<ListItem text="Git" icon={SiGit}/>
		</ul>
	</div>
);

const ListItem = ({text, icon}: {text: ReactNode; icon: IconType}) => (
	<li className="flex space-x-2">
		<span>{icon({className: 'h-6 w-6'})}</span>
		<span>{text}</span>
	</li>
	);

export default Home;
