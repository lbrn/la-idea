import React, { Fragment } from 'react';
import { AppBar, Toolbar, makeStyles, Grid, Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';

import MainMenu from './MainMenu';
import theme from '../theme/theme';
import { logo } from '../assets/index';

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
	link: {
		color: theme.palette.primary.main,
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'flex-start',
		justifyItems: 'space-between',
	},
	linksCont: {
		marginLeft: "auto"
	}
});

// btns --> pullRight

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<MainMenu />
				<Link to="/">
					<div className={classes.logo} />
				</Link>

				{useMediaQuery(theme.breakpoints.up('sm')) && (
					<div className={classes.linksCont}>
						<Button component={Link} className={classes.link} to="/About">
							About
						</Button>
						<Button
							component={Link}
							className={classes.link}
							to="/Investigators"
						>
							Investigators
						</Button>
						<Button
							component={Link}
							className={classes.link}
							to="/Institutions"
						>
							Institutions
						</Button>
						<Button component={Link} className={classes.link} to="/Awards">
							Awards
						</Button>
						<Button component={Link} className={classes.link} to="/Resources">
							Resources
						</Button>
					</div>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
