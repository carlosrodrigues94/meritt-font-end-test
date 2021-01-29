import React, { useContext } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StylesContext } from '../../context/StylesContext';
import { ExamContext } from '../../context/ExamContext';

const Header: React.FC = () => {
  const { classes } = useContext(StylesContext);
  const { apiLoading } = useContext(ExamContext);

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
        <CircularProgress
          style={{
            margin: '0 0 0 auto',
            visibility: apiLoading ? 'visible' : 'hidden',
            color: '#fff',
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
