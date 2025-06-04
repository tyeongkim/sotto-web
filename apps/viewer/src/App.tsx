import '@sotto-web/shared/styles/reset.css';
import '@sotto-web/shared/styles/font.css';
import { Author } from './sections/author';
import { Content } from './sections/content';
import { Divider } from './sections/divider';
import { Footer } from './sections/footer';
import { Header } from './sections/header';
import { main } from './styles/app.css';

export default function App() {
	return (
		<div className={main}>
			<Header />
			<Author />
			<Divider />
			<Content />
			<Footer />
		</div>
	);
}
