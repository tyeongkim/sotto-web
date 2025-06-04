import { emojiStyle, header, lastEditedStyle, titleStyle } from './styles.css';

export function Header() {
	return (
		<header className={header}>
			<p className={emojiStyle}>😀</p>
			<h1 className={titleStyle}>Diary Title</h1>
			<p className={lastEditedStyle}>Last Edited : 9:41 PM</p>
		</header>
	);
}
