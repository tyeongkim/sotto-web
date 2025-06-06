import {
	content,
	descriptionStyle,
	iconWrapper,
	lineStyle,
	section,
	titleContainer,
	titleStyle,
} from './styles.css';

interface DetailSectionProps {
	id?: string;
	icon: React.ReactNode;
	title: string;
	description: string;
	children?: React.ReactNode;
}

export function DetailSection(props: DetailSectionProps) {
	const { id, icon, title, description, children } = props;

	return (
		<section id={id} className={section}>
			<div className={content}>
				<div className={iconWrapper}>{icon}</div>
				<div className={titleContainer}>
					<h2 className={titleStyle}>{title}</h2>
					<p className={descriptionStyle}>
						{description.split('\n').map((desc, i) => (
							<span key={i.toString()} className={lineStyle}>
								{desc}
							</span>
						))}
					</p>
				</div>
			</div>
			{children}
		</section>
	);
}
