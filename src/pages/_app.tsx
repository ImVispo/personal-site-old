// Import NProgress from 'nprogress';
import React, {StrictMode} from "react";
import type {AppProps} from 'next/app';
// Import {Router} from 'next/router';

import Head from "next/head";

import {SiGithub, SiTwitter} from 'react-icons/si';

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
				<Nav/>
				<Component {...pageProps} />
			</div>
		</StrictMode>
	);
}

function Nav() {
	const navLinks = [['Home', '/'], ['Projects', '/projects']];
	return (
		<div className="flex items-center py-5 mb-10 space-x-2 border-b border-slate-800 backdrop-blur">
			<nav className="pr-6 text-sm font-semibold text-slate-200">
				<ul className="flex space-x-2">
					{navLinks.map(([title, url]) => (
						<a
							key={url}
							href={url}
							className="py-3 px-5 hover:bg-white/10 rounded-full"
						>{title}
						</a>
				))}
				</ul>
			</nav>
			<div className="flex flex-1 pl-6 space-x-6 border-l border-slate-700">
				<a
					href="https://github.com/ImVispo"
					target="_blank"
					rel="noreferrer"
					aria-label="GitHub Profile"
					className="py-3 px-5 hover:bg-white/10 rounded-full"
				>
					<SiGithub className="w-5 h-5 text-slate-400" />
					<span className="sr-only">GitHub Profile</span>
				</a>
				<a
					href="https://twitter.com/notvispo"
					target="_blank"
					rel="noreferrer"
					aria-label="GitHub Profile"
					className="py-3 px-5 hover:bg-white/10 rounded-full"
				>
					<SiTwitter className="w-5 h-5 text-slate-400" />
					<span className="sr-only">GitHub Profile</span>
				</a>
			</div>
			<Spotify />
		</div>
);
}

export default App;
