import React from 'react';
import {useLanyard} from 'use-lanyard';
import {SiSpotify} from 'react-icons/si';

export const DISCORD_ID = "160189333507145728";

export function Spotify() {
    const {data: user} = useLanyard(DISCORD_ID);
    const c = 'px-5 py-3 text-slate-400 text-right text-sm select-none sm:select-text inline-flex rounded-sm focus:outline-none focus:opacity-100 focus:ring items-center space-x-2 no-underline min-w-100 hover:bg-white/10 rounded-full';
    if (!user || !user.spotify) {
        return (
	<p className={c}>
		<span className="overflow-hidden">Not playing anything</span>
		<span>
			<SiSpotify />
		</span>
	</p>
        );
    }

    return (
	<a
		target="_blank"
		rel="noreferrer"
		className={c}
		href={`https://open.spotify.com/track/${user.spotify.track_id}`}
	>
		<span className="truncate">
			Listening to {user.spotify.song} by {user.spotify.artist}
		</span>
		<span>
			<SiSpotify />
		</span>
	</a>
    );
}
