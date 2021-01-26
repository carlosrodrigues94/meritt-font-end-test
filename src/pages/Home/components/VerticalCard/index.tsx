import { Box } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../../../hooks/useStyles';

const VerticalCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.cardVertical}>
      teste BOX
      {/* <Button /> */}
    </Box>
  );
};

export default VerticalCard;
