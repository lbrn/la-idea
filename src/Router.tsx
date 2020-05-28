import React from 'react'
import {Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';

const Routes = () => {
	return (
		<Switch>
			<Route path="/">
				<HomePage/>
			</Route>
		</Switch>
	)
}

export default Routes
