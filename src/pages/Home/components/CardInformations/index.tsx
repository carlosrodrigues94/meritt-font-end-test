import { Box, Typography } from '@material-ui/core';
import React, { useCallback } from 'react';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../../../../hooks/useStyles';

const badgeColors = {
  purple: '#5653FF',
  orange: '#FF9153',
  disabled: '#999',
};

interface ICardInformationsProps {
  badgeText: string;
  title: string;
  badgeColor: 'purple' | 'orange' | 'disabled';
  progressBarPercent: number;
  time: string;
  questionsFinished?: number | undefined;
  questionsTotal?: number;
  textDateFromTo: string;
  isDisabled?: boolean;
  hideProgressBar?: boolean;
}

const CardInformations: React.FC<ICardInformationsProps> = ({
  badgeText,
  title,
  badgeColor,
  progressBarPercent,
  questionsFinished = undefined,
  time,
  questionsTotal,
  textDateFromTo,
  isDisabled = false,
  hideProgressBar = false,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const handleClickCard = useCallback(() => {
    history.push('/exam');
  }, [history]);

  return (
    <Box
      component="div"
      className={classes.cardInformations}
      style={isDisabled ? { background: '#C4C4C4', opacity: 0.7 } : {}}
      onClick={handleClickCard}
    >
      <Box
        component="span"
        className={classes.cardInformationsBadge}
        style={{ background: badgeColors[badgeColor] }}
      >
        <Typography component="p" className={classes.cardInformationBadgeText}>
          {badgeText}
        </Typography>
      </Box>
      <Typography component="h5" className={classes.cardInformationsTitle}>
        {title}
      </Typography>
      {!hideProgressBar && (
        <Box component="span" className={classes.cardInformationsProgressBar}>
          <Box
            component="span"
            className={classes.cardInformationsProgressBarFilled}
            style={{ width: `${progressBarPercent}%` }}
          />
        </Box>
      )}
      <Box
        component="div"
        className={classes.cardInformationsContainerDetailsTimeQuestions}
        style={hideProgressBar ? { margin: '32px 0 0 0' } : {}}
      >
        <p>
          <WatchLaterIcon
            className={classes.cardInformationsDetailsTimeQuestionsIcon}
          />
        </p>
        <p>{time}</p>
        <p>
          <ViewModuleIcon
            className={classes.cardInformationsDetailsTimeQuestionsIcon}
            style={{ marginLeft: '20px' }}
          />
        </p>
        <p>
          {questionsFinished !== undefined && `${questionsFinished}/`}
          {`${questionsTotal} `}
          questões
        </p>
      </Box>

      <Typography
        component="p"
        className={classes.cardInformationsDetailsFromTo}
      >
        {textDateFromTo}
      </Typography>
    </Box>
  );
};

export default CardInformations;
