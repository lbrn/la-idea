import React, { Fragment, useState, KeyboardEvent } from 'react';
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

import theme from '../theme/theme';

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

const MainMenu = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleKeyPress = (e: KeyboardEvent) => {
		if (
			e.type === 'keydown' &&
			(e.key === 'Tab' || e.key === 'Shift' || e.key === 'Enter')
		) {
			return;
		}
		setIsOpen(false);
	};

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
			<Drawer
				open={isOpen}
				onClose={() => setIsOpen(false)}
				onClick={() => setIsOpen(!isOpen)}
				onKeyDown={(e) => handleKeyPress(e)}
			>
				<List className={classes.list}>
					<ListItem button to="/about" component={Link}>
						<ListItemText>About</ListItemText>
					</ListItem>
					<ListItem button to="/cores" component={Link}>
						<ListItemText>Cores</ListItemText>
					</ListItem>
					<ListItem button to="/award-information" component={Link}>
						<ListItemText>Award Information</ListItemText>
					</ListItem>
					<ListItem button to="nih" component={Link}>
						<ListItemText>NIH Research</ListItemText>
					</ListItem>
					<ListItem button to="resources" component={Link}>
						<ListItemText>Resources</ListItemText>
					</ListItem>
				</List>
			</Drawer>
		</Fragment>
	);
};

export default MainMenu;
