import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Nih from './components/Nih';
import Inbre from './components/Inbre';
import Cores from './components/Cores';
import Resources from './components/resources/Resources';
import AwardInformation from './components/AwardInformation';
import Awards from './components/awards/Awards';

const Routes = () => {
	return (
		<Switch>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/cores">
				<Cores />
			</Route>
			<Route path="/inbre">
				<Inbre />
			</Route>
			<Route path="/award-information">
				<AwardInformation />
			</Route>
			<Route path="/nih">
				<Nih />
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
