import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import MainMenu from './MainMenu';
import theme from './theme/theme';
import logo from './assets/logo.png';

const useStyles = makeStyles({
	title: {
		fontFamily: 'Proza Sans',
	},
	appBar: {
		backgroundColor: theme.palette.common.white,
	},

	logo: {
		backgroundImage: `url(${logo})`,
		backgroundPosition: 'center',
		backgroundSize: 'contain',
		height: 40,
		backgroundRepeat: 'no-repeat',
		width: 160,
	},
});

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.appBar}>
			<Toolbar>
				<MainMenu />
				<Link to="/">
					<div className={classes.logo} />
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
