'use client';
import { useEffect, useRef } from 'react';
import s from './Player.module.scss';
import MuxPlayer from '@mux/mux-player-react';

export default function Player() {
	const ref = useRef<HTMLVideoElement | null>(null);
	const playCount = useRef<number>(0);

	async function fadeIn() {
		if (!ref.current) return;

		if (!ref.current.muted) return;
		ref.current.muted = false;
		ref.current.volume = 0;

		for (let i = 0; i < 1000 && ref.current.volume < 1; i++) {
			ref.current.volume = i / 1000;
			await new Promise((resolve) => setTimeout(resolve, 10));
		}

		ref.current.volume = 1.0;
	}

	function handleClick() {
		if (!ref.current) return;
		fadeIn();
	}

	return (
		<div id='player' onClick={handleClick} className={s.player}>
			<video
				autoPlay={true}
				muted
				loop
				className={s.player}
				ref={ref}
				controls={true}
				playsInline={false}
				style={{ height: '100dvh', width: '100%' }}
				src='https://stream.mux.com/yccw1QoQ02GCPdq01Jr02vYYHTlYKtjEqbFQT4vfShM2v00.m3u8'
			/>
		</div>
	);
}
