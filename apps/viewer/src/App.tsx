import '@sotto-web/shared/styles/reset.css';
import '@sotto-web/shared/styles/font.css';
import { useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';
import { AppContext } from './lib/app';
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
	const [diary, setDiary] = useState<Diary | null>(null);
	const [author, setAuthor] = useState<Author | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!uuid || !key) {
			console.error('UUID or key is missing');
			return;
		}

		const baseUrl = import.meta.env.PROD
			? 'https://sotto.tyeongk.im/api'
			: 'http://localhost:3000';

		fetch(`${baseUrl}/diaries/${uuid}`)
			.then((res) => res.json())
			.then(async (response: DiaryResponse) => {
				const { data } = response;
				const diary = await decrypt(key, data.nonce, data.data);
				setDiary({ ...diary, updatedAt: data.updatedAt });
				setAuthor(data.owner);
				setIsLoading(false);
			});
	}, [uuid, key]);

	return (
		<AppContext value={{ diary, author }}>
			<div className={main}>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<>
						<Header />
						<Author />
						<Divider />
						<Content />
					</>
				)}
				<Footer />
			</div>
		</AppContext>
	);
}
