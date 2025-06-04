import { color } from '@sotto-web/shared/styles/color.css';
import { style } from '@vanilla-extract/css';

export const header = style({
	width: '100%',
	padding: '16px 0',
	display: 'flex',
	flexDirection: 'column',
	gap: 12,
});

export const emojiStyle = style({
	fontSize: 32,
});

export const titleStyle = style({
	fontSize: 32,
	fontWeight: 600,
});

export const lastEditedStyle = style({
	color: color.sand,
	fontSize: 14,
});
