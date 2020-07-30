import React from 'react';
import { BrowserRouter as ReactRouter } from 'react-router-dom';
import Analytics from 'react-router-ga';

import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import Router from './Router';
import Header from './components/Header';
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
				<Analytics id="UA-31501615-1" debug>
					<div className={classes.app}>
						<Header />
						<Router />
					</div>
				</Analytics>
			</ReactRouter>
		</ThemeProvider>
	);
}

export default App;
