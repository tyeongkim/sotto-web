import { color } from '@sotto-web/shared/styles/color.css';
import { style } from '@vanilla-extract/css';

export const button = style({
	width: '100%',
	maxWidth: 300,
	padding: '16px 0',
	backgroundColor: color.mud,
	color: color.milk,
	fontSize: 16,
	fontWeight: 600,
	textAlign: 'center',
	borderRadius: 16,
	cursor: 'pointer',
	appearance: 'none',
	transition: 'transform 0.2s ease, filter 0.2s ease',
	':active': {
		transform: 'scale(0.98)',
		filter: 'brightness(0.9)',
	},
});
