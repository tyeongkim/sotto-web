import { useContext } from 'react';
import { AppContext } from '../../lib/app';
import { contentStyle } from './styles.css';

export function Content() {
	const { diary } = useContext(AppContext);

	return <pre className={contentStyle}>{diary?.content}</pre>;
}
