import React, { useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SendIcon from '@material-ui/icons/Send';
import { useStyles } from '../../../../hooks/useStyles';
import SubHeaderQuestionSelector from '../../../../components/SubHeaderQuestionSelector';

interface ISubHeaderProps {
  examTitleName: string;
  examTitleInitials: string;
  progress: number;
}

const SubHeader: React.FC<ISubHeaderProps> = ({
  examTitleName,
  examTitleInitials,
  progress,
}) => {
  const classes = useStyles();
  const [timeIsVisible, setTimeIsVisible] = useState(true);
  const [isOpenQuestionsSelector, setIsOpenQuestionsSelector] = useState(false);
  return (
    <>
      <Box component="div" className={classes.subHeaderComponent}>
        <Typography variant="h2" className={classes.examTitleName}>
          {examTitleName}
        </Typography>
        <Typography variant="h2" className={classes.examTitleInitials}>
          {examTitleInitials}
        </Typography>
        <Box component="div" className={classes.contentButtonAndTimeIsVisible}>
          <Button
            type="button"
            onClick={() => setTimeIsVisible(!timeIsVisible)}
            className={classes.buttonSubHeaderTimeIsVisible}
          >
            {timeIsVisible ? (
              <VisibilityOffIcon
                className={classes.visibilityAndQuestionsIcon}
              />
            ) : (
              <VisibilityIcon className={classes.visibilityAndQuestionsIcon} />
            )}
          </Button>
          <Box
            component="div"
            className={classes.contentTimeVisible}
            style={{
              background: timeIsVisible ? 'none' : '#F0F2F5',
            }}
          >
            <p
              style={{ opacity: timeIsVisible ? 1 : 0 }}
              className={classes.textButtonsQuestionsAndTimeVisible}
            >
              00:30:45
            </p>
          </Box>
        </Box>
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
            <ViewModuleIcon className={classes.visibilityAndQuestionsIcon} />
          </Button>
          <SubHeaderQuestionSelector
            isOpen={isOpenQuestionsSelector}
            onClickClose={() => {
              setIsOpenQuestionsSelector(!isOpenQuestionsSelector);
            }}
          />
          <p className={classes.textButtonsQuestionsAndTimeVisible}>Questões</p>
        </div>
        <Button type="button" className={classes.buttonSubHeaderSendExam}>
          <b className={classes.buttonSendExamText}>Entregar Prova</b>
          <SendIcon className={classes.buttonSubHeaderSendExamIcon} />
        </Button>
      </Box>
      <Box component="div" className={classes.containerLineProgress}>
        <Box component="span" className={classes.contentLineProgress}>
          <Box
            component="span"
            className={classes.lineProgress}
            style={{
              width: `${progress}%`,
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default SubHeader;
