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
			<div className="bg-slate-900">
				<Nav/>
				<Component {...pageProps} />
			</div>
		</StrictMode>
	);
}

function Nav() {
	const navLinks = [['Home', '/'], ['Projects', '/projects']];
	return (
		<div className="flex float-right py-5 w-full border-b border-slate-800 backdrop-blur">
			<div className="flex w-full">
				<nav className="mx-6 text-sm font-semibold text-slate-200">
					<ul className="flex space-x-8">
						{navLinks.map(([title, url]) => (
							<a
								key={url}
								href={url}
								className="hover:text-sky-500 dark:hover:text-sky-400"
							>{title}
							</a>
				))}
					</ul>
				</nav>
				<div className="flex pl-6 space-x-6 border-l border-slate-700">
					<a
						href="https://github.com/ImVispo"
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub Profile"
					>
						<SiGithub className="w-5 h-5 text-slate-400 hover:text-sky-500" />
						<span className="sr-only">GitHub Profile</span>
					</a>
					<a
						href="https://twitter.com/notvispo"
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub Profile"
					>
						<SiTwitter className="w-5 h-5 text-slate-400 hover:text-sky-500" />
						<span className="sr-only">Twitter Profile</span>
					</a>
				</div>
			</div>
			<Spotify />
		</div>
);
}

export default App;
