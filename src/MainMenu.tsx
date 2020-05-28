import React, { Fragment, useState } from 'react';
import {
	Drawer,
	List,
	ListItem,
	ListItemText,
	IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { MenuRounded, MenuOpenRounded } from '@material-ui/icons';

import { Link } from 'react-router-dom';

import theme from './theme/theme';

const useStyles = makeStyles({
	list: {
		width: '30vw',
	},
	icon: {
		color: theme.palette.primary.main,
		margin: theme.spacing(1),
	},
	link: {
		textDecoration: 'none',
		color: theme.palette.common.black,
	},
});
interface MainMenuProps {
	isOpen: boolean;
	closeMenu: any;
}
const MainMenu = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const classes = useStyles();
	return (
		<Fragment>
			<IconButton
				edge="start"
				color="default"
				aria-label="menu"
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}
			>
				{isOpen ? (
					<MenuOpenRounded className={classes.icon} />
				) : (
					<MenuRounded className={classes.icon} />
				)}
			</IconButton>
			<Drawer open={isOpen} onClose={() => setIsOpen(false)}>
				<List className={classes.list}>
					<Link to="/about" className={classes.link}>
						<ListItem button>
							<ListItemText>About</ListItemText>
						</ListItem>
					</Link>

					<Link to="/cores" className={classes.link}>
						<ListItem button>
							<ListItemText>Cores</ListItemText>
						</ListItem>
					</Link>
					<Link to="/inbre" className={classes.link}>
						<ListItem button>
							<ListItemText>Inbre</ListItemText>
						</ListItem>
					</Link>
					<Link to="nih" className={classes.link}>
						<ListItem button>
							<ListItemText>Nih Research</ListItemText>
						</ListItem>
					</Link>
				</List>
			</Drawer>
		</Fragment>
	);
};

export default MainMenu;
