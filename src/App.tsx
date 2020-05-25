import React from 'react';

import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';
import HomePage from './HomePage';
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
			<div className={classes.app}>
				<Header />
				<HomePage />
			</div>
			/
		</ThemeProvider>
	);
}

export default App;
