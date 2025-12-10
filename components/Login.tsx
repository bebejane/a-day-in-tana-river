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
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setLoading(true);
		setError(null);

		try {
			const res = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					password,
				}),
			});

			if (res.status === 200) {
				setIsOpen(false);
				document.getElementById('player')?.click();
			} else if (res.status === 401) {
				setError('Invalid password, please try again.');
			} else setError('Something went wrong');
		} catch (e) {
			setError('Something went wrong');
			return;
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className={cn(s.login, !isOpen && s.closed)}>
			<header>
				<h1>A Day in Tana River</h1>
			</header>
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
				{error && <p className={s.error}>{error}</p>}
			</div>
			<header>
				<h1>a film by Senay Berhe</h1>
			</header>
		</div>
	);
}
