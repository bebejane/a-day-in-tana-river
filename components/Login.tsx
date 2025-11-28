'use client';

import Content from '@/components/Content';
import s from './Login.module.scss';
import { useState } from 'react';

export type LoginProps = {
	intro: NonNullable<StartQuery['aDayInTanaRiver']>['intro'];
};

export default function Login({ intro }: LoginProps) {
	const [password, setPassword] = useState('');
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<div className={s.login}>
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
