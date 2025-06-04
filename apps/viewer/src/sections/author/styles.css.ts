import { style } from '@vanilla-extract/css';

export const section = style({
	padding: '16px 0',
	display: 'flex',
	alignItems: 'center',
	gap: 8,
});

export const image = style({
	width: 32,
	height: 32,
	borderRadius: '50%',
	objectFit: 'cover',
	flexShrink: 0,
});

export const sharedBy = style({
	fontSize: 16,
	fontWeight: 500,
});
