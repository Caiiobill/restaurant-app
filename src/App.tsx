import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Routes } from './routes/routes';

// COMPONENTES
import { Header } from './components/header/header';

const App = () => {
	return (
		<Router>
			<AnimatePresence exitBeforeEnter>
				<div className="w-screen flex flex-col bg-primary min-h-[100vh]">
					<Header />
					<main className="mt-14 md:mt-20 px-4 md:px-16 py-8 w-full">
						<Routes />
					</main>
				</div>
			</AnimatePresence>
		</Router>
	);
};

export { App };
