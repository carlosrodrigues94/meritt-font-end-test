import React, { useContext, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from '../../hooks/useStyles';
import SubHeader from './components/SubHeader';
import { ExamContext } from '../../context/ExamContext';

const Exam: React.FC = () => {
  const classes = useStyles();
  const { exam, getExam } = useContext(ExamContext);

  useEffect(() => {
    getExam();
  }, [getExam]);

  console.log('examm', exam);
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
