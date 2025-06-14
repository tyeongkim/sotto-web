import '@sotto-web/shared/styles/reset.css';
import '@sotto-web/shared/styles/font.css';
import { Download, LockKeyhole, PackageOpen } from 'lucide-react';
import { Button } from './components/button';
import { DetailSection } from './components/detail';
import { BannerSection } from './sections/banner';
import { Footer } from './sections/footer';
import { HeroSection } from './sections/hero';
import { buttonGroup, sharing } from './styles/app.css';

export default function App() {
	return (
		<>
			<HeroSection />
			<BannerSection />
			<DetailSection
				icon={<LockKeyhole size={48} />}
				title='Highly Secured'
				description={
					'All data will be stored in your local device using IOTA Stronghold.' +
					'\n' +
					'When sharing data, Asymmetric encryption will be applied.'
				}
			>
				<img className={sharing} src='/sharing.png' alt='Sharing' />
			</DetailSection>
			<DetailSection
				icon={<PackageOpen size={48} />}
				title='Open Source'
				description={
					'Clone, modify and deploy to make your own app!' +
					'\n' +
					'All source code are MIT Licensed.'
				}
			>
				<a
					href='https://github.com/cottons-kr/sotto-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Button>Go to Repository</Button>
				</a>
			</DetailSection>
			<DetailSection
				id='download'
				icon={<Download size={48} />}
				title='Download'
				description={
					'Only works on iOS Simulator, not real iPhone.' +
					'\n' +
					'Latest version : v1.2'
				}
			>
				<div className={buttonGroup}>
					<a
						href='https://github.com/cottons-kr/sotto-app/releases/download/1.2/Sotto-Android.zip'
						rel='noopener noreferrer'
					>
						<Button>Android (.apk)</Button>
					</a>
					<a
						href='https://github.com/cottons-kr/sotto-app/releases/download/1.2/Sotto-iOS-Simulator.zip'
						rel='noopener noreferrer'
					>
						<Button>iOS (.app)</Button>
					</a>
				</div>
			</DetailSection>
			<Footer />
		</>
	);
}
