import { Box } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../../../hooks/useStyles';

const HorizontalCard: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.cardHorizontal}>
      {children}
    </Box>
  );
};

export default HorizontalCard;
