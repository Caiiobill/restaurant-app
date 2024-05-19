import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

// PAGES
import { MainContainer } from '../components/main-container/main-container';
import { NotFound } from '../pages/not-found/not-found';

export const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path="/" element={<MainContainer />} />
			<Route path="*" element={<NotFound />} />
		</Switch>
	);
};
