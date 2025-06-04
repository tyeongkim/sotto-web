import { image, section, sharedBy } from './styles.css';

export function Author() {
	return (
		<section className={section}>
			<img className={image} src='/profile.png' alt='Profile' />
			<span className={sharedBy}>Shared by Yuchan Han</span>
		</section>
	);
}
