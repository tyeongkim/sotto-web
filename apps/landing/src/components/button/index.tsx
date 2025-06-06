import { button } from './styles.css';

interface ButtonProps {
	children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
	const { children } = props;

	return (
		<button type='button' className={button}>
			{children}
		</button>
	);
}
