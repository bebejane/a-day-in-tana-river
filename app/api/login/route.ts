import { cookies } from 'next/headers';

export async function POST(req: Request) {
	const cookiStore = await cookies();

	if (cookiStore.get('user')?.value === 'authorized') {
		return new Response('authorized', { status: 200 });
	}
	const { password } = await req.json();

	if (password === process.env.STATIC_PASSWORD) {
		cookiStore.set('user', 'authorized', { path: '/' });
		return new Response('ok', { status: 200 });
	} else return new Response('unauthorized', { status: 401 });
}
