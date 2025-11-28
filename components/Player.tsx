'use client';
import { useEffect, useRef } from 'react';
import s from './Player.module.scss';
import MuxPlayer from '@mux/mux-player-react';

export default function Player() {
	const ref = useRef<HTMLVideoElement | null>(null);

	async function fadeIn() {
		if (!ref.current) return;
		if (ref.current.volume > 0) return;

		ref.current.muted = false;

		for (let i = 0; i < 1000; i++) {
			ref.current.volume = i / 1000;
			console.log(ref.current.volume);
			await new Promise((resolve) => setTimeout(resolve, 10));
		}
		ref.current.volume = 1;
	}

	function handleClick() {
		if (!ref.current) return;
		fadeIn();
	}

	useEffect(() => {
		if (!ref.current) return;
		const player = ref.current;
		//player.addEventListener('play', fadeIn);
		//return () => player.removeEventListener('play', fadeIn);
	}, []);

	return (
		<div id='player' onClick={handleClick} className={s.player}>
			<MuxPlayer
				autoPlay='muted'
				nohotkeys
				muted
				loop
				volume={0.0}
				streamType='on-demand'
				className={s.player}
				//@ts-ignore
				ref={ref}
				style={{ 'height': '100vh', 'width': '100%', '--controls': 'none' }}
				playbackId='yccw1QoQ02GCPdq01Jr02vYYHTlYKtjEqbFQT4vfShM2v00'
				metadata={{
					video_id: 'video-id-123456',
					video_title: 'A Day in Tana River',
					viewer_user_id: 'user-id',
				}}
			/>
		</div>
	);
}
