import { color } from '@sotto-web/shared/styles/color.css';
import { style } from '@vanilla-extract/css';

export const section = style({
	width: '100%',
	maxWidth: 600,
	margin: '0 auto',
	padding: '72px 20px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 56,
});

export const content = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 24,
});

export const iconWrapper = style({
	width: 96,
	height: 96,
	display: 'grid',
	placeItems: 'center',
	borderRadius: '50%',
	backgroundColor: color.cream,
});

export const titleContainer = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 16,
	textAlign: 'center',
});

export const titleStyle = style({
	fontSize: 36,
	fontWeight: 600,
	letterSpacing: -1.35,
	'@media': {
		'(max-width: 600px)': {
			fontSize: 32,
		},
	},
});

export const descriptionStyle = style({
	fontSize: 20,
	fontWeight: 500,
	lineHeight: 1.5,
	letterSpacing: -0.75,
	'@media': {
		'(max-width: 600px)': {
			fontSize: 16,
		},
	},
});

export const lineStyle = style({
	display: 'block',
});
