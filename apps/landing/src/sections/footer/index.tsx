import { copyright, footer, list, listItem } from './styles.css';

export function Footer() {
	return (
		<footer className={footer}>
			<ul className={list}>
				<li className={listItem}>
					<a
						href='https://github.com/tyeongkim/sotto-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						Github
					</a>
				</li>
				<li className={listItem}>
					<a href='#download' rel='noopener noreferrer'>
						Download
					</a>
				</li>
			</ul>
			<p className={copyright}>© 2025 Sotto</p>
		</footer>
	);
}
