import { useContext } from 'react';
import { AppContext } from '../../lib/app';
import { image, section, sharedBy } from './styles.css';

export function Author() {
	const { author } = useContext(AppContext);

	return (
		<section className={section}>
			<img
				className={image}
				src={author?.profileUrl || '/profile.png'}
				alt='Profile'
			/>
			<span className={sharedBy}>Shared by {author?.name}</span>
		</section>
	);
}
