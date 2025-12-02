'use client';

import s from './About.module.scss';
import cn from 'classnames';
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
			<div className={cn(s.about, isOpen && s.open)}>
				<div className={`${s.modal} ${isOpen ? s.open : ''}`}>
					<Content content={text} />
				</div>
			</div>
		</>
	);
}
