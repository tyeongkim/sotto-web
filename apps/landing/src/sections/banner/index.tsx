import { banner, image } from './styles.css';

export function BannerSection() {
	return (
		<section className={banner}>
			<img className={image} src='/mockups.png' alt='Mockups' />
		</section>
	);
}
