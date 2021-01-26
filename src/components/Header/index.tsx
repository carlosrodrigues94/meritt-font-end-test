import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../../hooks/useStyles';

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.headerComponent}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.headerBurguerButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon className={classes.headerBurgerIcon} />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          SOMOS
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
