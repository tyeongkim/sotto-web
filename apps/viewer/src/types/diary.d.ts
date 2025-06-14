type Diary = {
	emoji: string;
	title: string;
	content: string;
	location?: string;
	weather?: Weather;
	attachments: Array<{ remote_url: string }>;
	updatedAt: string;
};

type Author = {
	name: string;
	profileUrl: string;
};

type Weather =
	| 'sunny'
	| 'cloudy'
	| 'rainy'
	| 'windy'
	| 'snowy'
	| 'foggy'
	| 'stormy'
	| 'drizzle';
