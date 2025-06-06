import { color } from '@sotto-web/shared/styles/color.css';
import { style } from '@vanilla-extract/css';

export const hero = style({
	width: '100%',
	padding: '136px 20px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 56,
});

export const title = style({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 32,
});

export const symbol = style({
	width: 64,
	height: 'auto',
});

export const titleText = style({
	fontSize: 40,
	fontWeight: 600,
	lineHeight: 1.5,
	letterSpacing: -1.5,
	textAlign: 'center',
});

export const downloadGroup = style({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 16,
});

export const information = style({
	fontSize: 16,
	fontWeight: 500,
	color: color.sand,
});
