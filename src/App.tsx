import React from 'react';
import { BrowserRouter as ReactRouter } from 'react-router-dom';

import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import Router from './Router';
import Header from './components/Header';
import HomePage from './components/HomePage';
import theme from './theme/theme';

const useStyles = makeStyles({
	app: {
		width: '100vw',
		height: '100vh',
	},
});

function App() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ReactRouter>
				<div className={classes.app}>
					<Header />
					<Router />
				</div>
			</ReactRouter>
		</ThemeProvider>
	);
}

export default App;
