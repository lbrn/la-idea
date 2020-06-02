import React from 'react'
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About'
import Nih from './components/Nih';
import Inbre from './components/Inbre';
import Cores from './components/Cores';

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
