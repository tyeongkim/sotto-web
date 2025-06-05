import { createContext } from 'react';

type AppContextType = {
	diary: Diary | null;
	author: Author | null;
};

export const AppContext = createContext<AppContextType>({
	diary: null,
	author: null,
});
