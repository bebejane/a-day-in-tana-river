'use client';

import s from './About.module.scss';
import Content from '@/components/Content';
import { useState } from 'react';

export type AboutProps = {
	text: NonNullable<StartQuery['aDayInTanaRiver']>['text'];
};

export default function About({ text }: AboutProps) {
	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<button className={s.button} onClick={handleClick}>
				{isOpen ? 'Close' : 'About'}
			</button>
			<div className={s.about}>
				<div className={`${s.modal} ${isOpen ? s.open : ''}`}>
					<h2>A Day in Tana River</h2>
					<Content content={text} />
				</div>
			</div>
		</>
	);
}
