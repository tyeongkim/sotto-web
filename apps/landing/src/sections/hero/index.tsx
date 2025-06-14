import { Button } from '../../components/button';
import {
	downloadGroup,
	hero,
	information,
	symbol,
	title,
	titleText,
} from './styles.css';

export function HeroSection() {
	return (
		<section className={hero}>
			<div className={title}>
				<img className={symbol} src='/symbol.svg' alt='Sotto Symbol' />
				<h1 className={titleText}>
					Write your diary, share with friends safely.
				</h1>
			</div>
			<div className={downloadGroup}>
				<a href='#download' rel='noopener noreferrer'>
					<Button>Download - v1.2</Button>
				</a>
				<span className={information}>Available on iOS and Android</span>
			</div>
		</section>
	);
}
