import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import { MenuRounded, MenuOpenRounded } from '@material-ui/icons';
import theme from './theme/theme';
import logo from './assets/logo.png';

const useStyles = makeStyles({
  title: {
    fontFamily: 'Proza Sans',
  },
  menuButton: {},
  appBar: {
    backgroundColor: theme.palette.common.white,
  },
  icon: {
    color: theme.palette.primary.main,
    margin: theme.spacing(1),
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
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="default"
          aria-label="menu"
        >
          {menuIsOpen ? (
            <MenuOpenRounded
              className={classes.icon}
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            />
          ) : (
            <MenuRounded
              className={classes.icon}
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            />
          )}
        </IconButton>
        <div className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
