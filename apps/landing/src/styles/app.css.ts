import { style } from '@vanilla-extract/css';

export const sharing = style({
	width: '100%',
	maxWidth: 450,
	height: 'auto',
});

export const buttonGroup = style({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 8,
});
