import { color } from '@sotto-web/shared/styles/color.css';
import { style } from '@vanilla-extract/css';

export const footer = style({
	width: '100%',
	padding: '32px 20px',
	backgroundColor: color.cream,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 32,
});

export const list = style({
	listStyle: 'none',
	textAlign: 'center',
});

export const listItem = style({
	padding: '4px 0',
});

export const copyright = style({
	fontSize: 14,
	fontWeight: 500,
	color: color.sand,
});
