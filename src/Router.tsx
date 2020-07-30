import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Nih from './components/Nih';
import Institutions from './components/Institutions';
import Investigators from './components/Investigators';
import Resources from './components/resources/Resources';
import Awards from "./components/awards/Awards";

const Routes = () => {
	return (
		<Switch>
			<Route path="/about">
				<About />
			</Route>

			<Route path="/investigators">
				<Investigators />
			</Route>
			<Route path="/institutions">
				<Institutions />
			</Route>
			<Route path="/resources">
				<Resources />
			</Route>
			<Route path="/awards">
				<Awards />
			</Route>
			<Route path="/">
				<HomePage />
			</Route>
		</Switch>
	);
};

export default Routes;
