import { createContext } from 'react';

type AppContextType = {
	diary: Diary | null;
	author: Author | null;
	key: string | null;
};

export const AppContext = createContext<AppContextType>({
	diary: null,
	author: null,
	key: null,
});
