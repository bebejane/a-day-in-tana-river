'use client';

import s from './Login.module.scss';
import cn from 'classnames';
import Content from '@/components/Content';

import { useState } from 'react';

export type LoginProps = {
	intro: NonNullable<StartQuery['aDayInTanaRiver']>['intro'];
};

export default function Login({ intro }: LoginProps) {
	const [password, setPassword] = useState('');
	const [isOpen, setIsOpen] = useState(true);
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsOpen(false);
	}

	return (
		<div className={cn(s.login, !isOpen && s.closed)}>
			<h1>A day in Tana River</h1>
			<div className={s.wrap}>
				<Content content={intro} className={s.intro} />
				<form onSubmit={handleSubmit}>
					<input
						type='password'
						value={password}
						placeholder='Please enter your password'
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type='submit'>Enter</button>
				</form>
			</div>
		</div>
	);
}
