import { Box } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../hooks/useStyles';
import SubHeader from './components/SubHeader';

const Exam: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <SubHeader examTitleInitials="LC" examTitleName="Linguagens e Códigos" />
      <Box component="div" className={classes.examContainer}>
        teste
      </Box>
    </>
  );
};

export default Exam;
