import { Box, Button, Menu, MenuItem } from '@material-ui/core';
import React, { useCallback, useRef, useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useStyles } from '../../../../hooks/useStyles';

interface IButtonThreeDotsProps {
  onClickUnMarkOption: () => void;
  onClickIgnoreOption: () => void;
  textBtn1: string;
  textBtn2: string;
}

const ButtonThreeDots: React.FC<IButtonThreeDotsProps> = ({
  onClickUnMarkOption,
  onClickIgnoreOption,
  textBtn1,
  textBtn2,
}) => {
  const classes = useStyles();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const refButton = useRef<HTMLButtonElement>(null);

  const handleOpenMenu = useCallback(() => {
    setIsOpenMenu(true);
  }, []);
  const handleCloseMenu = useCallback(() => {
    setIsOpenMenu(false);
  }, []);

  const handleClickIgnoreOption = useCallback(() => {
    setIsOpenMenu(false);

    onClickIgnoreOption();
  }, [onClickIgnoreOption]);
  const handleClickUnMarkOption = useCallback(() => {
    setIsOpenMenu(false);

    onClickUnMarkOption();
  }, [onClickUnMarkOption]);
  return (
    <>
      <Box
        component="div"
        className={classes.blackMenuBackgroundScreen}
        style={{ display: isOpenMenu ? 'flex' : 'none' }}
      />
      <Button
        type="button"
        className={classes.buttonThreeDotsAnswer}
        onClick={handleOpenMenu}
        ref={refButton}
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        id="simple-menu"
        open={isOpenMenu}
        onClose={handleCloseMenu}
        className={classes.menuButtonThreeDots}
        anchorEl={refButton.current}
      >
        <MenuItem onClick={handleClickUnMarkOption}>{textBtn1}</MenuItem>
        <MenuItem onClick={handleClickIgnoreOption}>{textBtn2}</MenuItem>
      </Menu>
    </>
  );
};

export default ButtonThreeDots;
