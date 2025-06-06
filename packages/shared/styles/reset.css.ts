import { globalStyle } from '@vanilla-extract/css';
import { color } from './color.css';

globalStyle('html, body, #root', {
	width: '100%',
	height: 'var(--vh, 100vh)',
	backgroundColor: color.milk,
	color: color.mud,
	wordBreak: 'keep-all',
	wordWrap: 'break-word',
	textWrap: 'pretty',
	scrollBehavior: 'smooth',
});

globalStyle('*', {
	boxSizing: 'border-box',
	margin: 0,
	padding: 0,
	fontSynthesis: 'none',
	WebkitFontSmoothing: 'antialiased',
	textRendering: 'optimizeLegibility',
	shapeRendering: 'geometricPrecision',
	WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
	userSelect: 'none',
});

globalStyle('*:focus', { outline: 'none' });

globalStyle('a', {
	display: 'contents',
	color: 'inherit',
	cursor: 'pointer',
	textDecoration: 'none',
});

globalStyle('svg', {
	flexShrink: 0,
});

globalStyle('input, textarea, button', {
	fontFamily: 'inherit',
	color: 'inherit',
	background: 'transparent',
	border: 'none',
	outline: 'none',
});

globalStyle('input::placeholder, textarea::placeholder', {
	color: color.sand,
});

globalStyle('::-webkit-scrollbar', { display: 'none' });
