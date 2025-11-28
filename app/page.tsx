import About from '@/components/About';
import Login from '@/components/Login';
import { StartDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';

export default async function Home() {
	const { aDayInTanaRiver } = await apiQuery(StartDocument);
	if (!aDayInTanaRiver) return notFound();

	return (
		<article>
			<Login intro={aDayInTanaRiver.intro} />
			<About text={aDayInTanaRiver.text} />
		</article>
	);
}
