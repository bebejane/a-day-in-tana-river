import s from './page.module.scss';
import About from '@/components/About';
import Login from '@/components/Login';
import Player from '@/components/Player';
import { StartDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';

export default async function Home() {
	const { aDayInTanaRiver } = await apiQuery(StartDocument);
	if (!aDayInTanaRiver) return notFound();

	return (
		<>
			<Player />
			<Login intro={aDayInTanaRiver.intro} />
			<About text={aDayInTanaRiver.text} />
		</>
	);
}
