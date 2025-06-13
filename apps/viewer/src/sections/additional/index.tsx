import { MapPin } from 'lucide-react';
import { useContext } from 'react';
import { AppContext } from '../../lib/app';
import { getWeatherIcon, getWeatherLabel } from '../../lib/weather';
import { item, section } from './styles.css';

export function Additional() {
	const { diary } = useContext(AppContext);
	if (!diary) {
		return null;
	}

	const WeatherIcon = getWeatherIcon(diary.weather);

	return (
		<section className={section}>
			<div className={item}>
				<MapPin size={20} />
				<span>{diary.location || 'Not set'}</span>
			</div>
			<div className={item}>
				<WeatherIcon size={20} />
				<span>
					{diary.weather ? getWeatherLabel(diary.weather) : 'Not set'}
				</span>
			</div>
		</section>
	);
}
