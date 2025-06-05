import '@sotto-web/shared/styles/reset.css';
import '@sotto-web/shared/styles/font.css';
import { useQueryState } from 'nuqs';
import { useEffect } from 'react';
import { decrypt } from './lib/crypto';
import { Author } from './sections/author';
import { Content } from './sections/content';
import { Divider } from './sections/divider';
import { Footer } from './sections/footer';
import { Header } from './sections/header';
import { main } from './styles/app.css';

export default function App() {
	const [uuid] = useQueryState('uuid');
	const [key] = useQueryState('key');

	useEffect(() => {
		if (!uuid || !key) {
			console.error('UUID or key is missing');
			return;
		}

		fetch(`http://localhost:3000/diaries/${uuid}`)
			.then((res) => res.json())
			.then(async (data) => {
				console.log('Fetched data:', data);
				console.log(await decrypt(key, data.data.nonce, data.data.data));
			});
	}, [uuid, key]);

	return (
		<div className={main}>
			<Header />
			<Author />
			<Divider />
			<Content />
			<Footer />
		</div>
	);
}
