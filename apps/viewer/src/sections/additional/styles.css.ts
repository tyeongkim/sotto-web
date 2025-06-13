import { color } from '@sotto-web/shared/styles/color.css';
import { style } from '@vanilla-extract/css';

export const section = style({
	width: '100%',
	padding: '8px 0',
	display: 'flex',
	gap: 8,
});

export const item = style({
	width: '100%',
	padding: 12,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: 6,
	borderRadius: 16,
	fontWeight: 500,
	backgroundColor: color.cream,
});
