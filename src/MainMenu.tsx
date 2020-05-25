import React, { Fragment, useState } from 'react';
import {
	Drawer,
	List,
	ListItem,
	ListItemText,
	IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import theme from './theme/theme';
import { MenuRounded, MenuOpenRounded } from '@material-ui/icons';

const useStyles = makeStyles({
	list: {
		width: '30vw',
	},
	icon: {
		color: theme.palette.primary.main,
		margin: theme.spacing(1),
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
			>
				{isOpen ? (
					<MenuOpenRounded className={classes.icon} />
				) : (
					<MenuRounded className={classes.icon} />
				)}
			</IconButton>
			<Drawer open={isOpen} onClose={() => setIsOpen(false)}>
				<List className={classes.list}>
					<ListItem button>
						<ListItemText>About</ListItemText>
					</ListItem>
					<ListItem button>
						<ListItemText>Cores</ListItemText>
					</ListItem>
					<ListItem button>
						<ListItemText>Cobre</ListItemText>
					</ListItem>
					<ListItem button>
						<ListItemText>Inbre</ListItemText>
					</ListItem>
					<ListItem button>
						<ListItemText>Nih Research</ListItemText>
					</ListItem>
				</List>
			</Drawer>
		</Fragment>
	);
};

export default MainMenu;
