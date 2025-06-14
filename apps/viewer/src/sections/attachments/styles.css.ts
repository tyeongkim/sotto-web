import { color } from '@sotto-web/shared/styles/color.css';
import { style } from '@vanilla-extract/css';

export const section = style({
	width: '100%',
	padding: '16px 0',
	display: 'flex',
	gap: 8,
	overflowX: 'auto',
});

export const item = style({
	width: 160,
	height: 100,
	backgroundColor: color.cream,
	flexShrink: 0,
	borderRadius: 16,
	backgroundSize: 'cover',
	cursor: 'pointer',
});

export const biggerOverlay = style({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	backgroundColor: 'rgba(0, 0, 0, 0.8)',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	zIndex: 1000,
});

export const biggerImage = style({
	maxWidth: 'calc(100% - 32px)',
	maxHeight: '70vh',
	borderRadius: 16,
});
