import React, { useContext } from 'react';

import { Alert } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { StylesContext } from '../../../../context/StylesContext';

interface ISnackbarAlert {
  onClose: () => void;
  isOpen: boolean;
}

const SnackbarAlert: React.FC<ISnackbarAlert> = ({ isOpen, onClose }) => {
  const { classes } = useContext(StylesContext);

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={4000}
      onClose={onClose}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    >
      <Alert
        elevation={6}
        variant="filled"
        style={{ background: '#FA558F', margin: '50px 0 0 0' }}
        icon={false}
      >
        Marcada para revisar mais tarde
        <Button
          type="button"
          className={classes.buttonBookmark}
          onClick={onClose}
          style={{ margin: '0 0 0 20px', minWidth: 0, width: '30px' }}
        >
          <CloseIcon style={{ color: '#FFF' }} />
        </Button>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
