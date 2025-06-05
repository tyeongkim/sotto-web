import { useContext } from 'react';
import { AppContext } from '../../lib/app';
import { emojiStyle, header, lastEditedStyle, titleStyle } from './styles.css';

export function Header() {
	const { diary } = useContext(AppContext);
	if (!diary) {
		return null;
	}

	return (
		<header className={header}>
			<p className={emojiStyle}>{diary.emoji}</p>
			<h1 className={titleStyle}>{diary.title}</h1>
			<p className={lastEditedStyle}>
				Last Edited : {new Date(diary.updatedAt).toLocaleString()}
			</p>
		</header>
	);
}
