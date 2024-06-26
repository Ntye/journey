import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

	const [isAuthenticated, setIsAuthenticated] = useState({
		"auth": false,
		"token": ""
	});

	return (
		<GlobalContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
			{children}
		</GlobalContext.Provider>
	);
};
