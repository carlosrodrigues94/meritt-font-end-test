import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SendIcon from '@material-ui/icons/Send';
import { useStyles } from '../../../../hooks/useStyles';
import SubHeaderQuestionSelector from '../../../../components/SubHeaderQuestionSelector';

const SubHeader: React.FC = () => {
  const classes = useStyles();
  const [timeIsVisible, setTimeIsVisible] = useState(true);
  const [isOpenQuestionsSelector, setIsOpenQuestionsSelector] = useState(false);
  return (
    <Box component="div" className={classes.subHeaderComponent}>
      <h2>Linguagens e Códigos</h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          transition: 'all 0.3s',
        }}
      >
        <Button
          type="button"
          onClick={() => setTimeIsVisible(!timeIsVisible)}
          className={classes.buttonSubHeaderTimeIsVisible}
        >
          {timeIsVisible ? (
            <VisibilityOffIcon style={{ fontSize: '24px' }} />
          ) : (
            <VisibilityIcon style={{ fontSize: '24px' }} />
          )}
        </Button>
        <p style={{ opacity: timeIsVisible ? 1 : 0 }}>00:30:45</p>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          transition: 'all 0.3s',
        }}
      >
        <Button
          type="button"
          className={classes.buttonSubHeaderTimeIsVisible}
          onClick={() => setIsOpenQuestionsSelector(!isOpenQuestionsSelector)}
        >
          <ViewModuleIcon style={{ fontSize: '24px' }} />
        </Button>
        <SubHeaderQuestionSelector
          questionsQuantity={45}
          isOpen={isOpenQuestionsSelector}
          onClickClose={() => {
            setIsOpenQuestionsSelector(!isOpenQuestionsSelector);
          }}
        />
        <p>Questões</p>
      </div>
      <Button type="button" className={classes.buttonSubHeaderSendExam}>
        <b>Entregar Prova</b>
        <SendIcon
          style={{ fontSize: '24px' }}
          className={classes.buttonSubHeaderSendExamIcon}
        />
      </Button>
    </Box>
  );
};

export default SubHeader;
