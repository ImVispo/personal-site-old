import React, {ReactNode} from 'react';
import type {NextPage} from 'next';
import type {IconType} from 'react-icons';
import {
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

const Home: NextPage = () => (
	<div>
		<WhoAmI/>
		<WhatImDoing />
		<Technologies />
	</div>
	);

const WhoAmI = () => (
	<div className="mb-10">
		<h1 className="mb-5 text-4xl font-bold">
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
		<h1 className="mb-5 text-4xl font-bold">What I'm doing</h1>
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

const Technologies = () => (
	<div>
		<div className="mb-5">
			<h1 className="mb-5 text-4xl font-bold">Technologies</h1>
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
