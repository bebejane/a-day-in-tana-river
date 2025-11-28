'use client';
import { useEffect, useRef } from 'react';
import s from './Player.module.scss';
import MuxPlayer from '@mux/mux-player-react';

export default function Player() {
	const ref = useRef<any | null>(null);

	function handleClick() {
		ref.current.muted = false;
	}
	return (
		<div onClick={handleClick}>
			<MuxPlayer
				autoPlay='muted'
				nohotkeys
				muted
				loop
				streamType='on-demand'
				className={s.player}
				ref={ref}
				style={{ 'height': '100%', 'width': '100%', '--controls': 'none' }}
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
