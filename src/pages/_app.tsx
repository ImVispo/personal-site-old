// Import NProgress from 'nprogress';
import React, {StrictMode} from "react";
import type {AppProps} from 'next/app';
// Import {Router} from 'next/router';

import Head from "next/head";

import {SiGithub, SiTwitter, SiLinkedin} from 'react-icons/si';

import {Spotify} from "../components/Spotify";

import '../styles/globals.css';
// Import 'nprogress/nprogress.css';
import 'tailwindcss/tailwind.css';

// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

function App({Component, pageProps}: AppProps) {
	return (
		<StrictMode>
			<Head>Nickholas Boboaca</Head>
			<div className="py-2 px-6 mx-auto max-w-4xl">
				<Nav />
				<Component {...pageProps} />
				<Footer />
			</div>
		</StrictMode>
	);
}

function Nav() {
	const navLinks = [['Home', '/'], ['Devlog', '/devlog']];
	return (
		<div className="flex items-center py-5 mb-10 space-x-2 border-b border-slate-700">
			<nav className="pr-6 text-sm font-semibold text-slate-200">
				<ul className="flex space-x-2">
					{navLinks.map(([title, url]) => (
						<a
							key={url}
							href={url}
							className="py-3 px-5 hover:bg-slate-800 rounded-full"
						>{title}
						</a>
					))}
				</ul>
			</nav>
			<div className="flex flex-1 pl-6 border-l border-slate-700">
				<a
					href="https://github.com/ImVispo"
					target="_blank"
					rel="noreferrer"
					aria-label="GitHub Profile"
					className="py-3 px-5 hover:bg-slate-800 rounded-full"
				>
					<SiGithub className="w-5 h-5 text-slate-400" />
					<span className="sr-only">GitHub Profile</span>
				</a>
				<a
					href="https://twitter.com/notvispo"
					target="_blank"
					rel="noreferrer"
					aria-label="GitHub Profile"
					className="py-3 px-5 hover:bg-slate-800 rounded-full"
				>
					<SiTwitter className="w-5 h-5 text-slate-400" />
					<span className="sr-only">GitHub Profile</span>
				</a>
				<a
					href="https://www.linkedin.com/in/nickholas-boboaca-990231162"
					target="_blank"
					rel="noreferrer"
					aria-label="LinkedIn Profile"
					className="py-3 px-5 hover:bg-slate-800 rounded-full"
				>
					<SiLinkedin className="w-5 h-5 text-slate-400" />
					<span className="sr-only">LinkedIn Profile</span>
				</a>
			</div>
			<Spotify />
		</div>
);
}

function Footer() {
	return (
		<div className="mt-10 mb-5 border-t border-slate-700">
			<div className="flex items-center mt-5 space-x-2 ">
				<h1 className="flex-1 font-medium">Nickholas Boboaca • {new Date().getFullYear()}</h1>
				<p>Inspired by my buddy <a href="https://alistair.sh/" className="text-slate-400 underline">Alistair's site</a> ❤️</p>
			</div>
		</div>
	);
}

export default App;
