import React from 'react';
import './index.css';

import { makeStyles, ThemeProvider } from '@material-ui/styles';
import Header from './Header';
import HomePage from './HomePage';

const useStyles = makeStyles({
	app: {
		width: '100vw',
		height: '100vh',
	},
});

function App() {
	const classes = useStyles();
	return (
		// <ThemeProvider theme={theme}>
		<div className={classes.app}>
			<Header />
			<HomePage />
		</div>
		// </ThemeProvider>
	);
}

export default App;
