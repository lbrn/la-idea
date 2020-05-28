import React from 'react'
import {Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import About from './About'
import Nih from './Nih';
import Inbre from './Inbre';
import Cores from './Cores';

const Routes = () => {
	return (
		<Switch>
			<Route path="/about">
				<About/>
			</Route>
			<Route path="/cores">
				<Cores/>
			</Route>
			<Route path="/inbre">
				<Inbre/>
			</Route>
			<Route path="/nih">
				<Nih/>
			</Route>
			<Route path="/">
				<HomePage/>
			</Route>
		</Switch>
	)
}

export default Routes
