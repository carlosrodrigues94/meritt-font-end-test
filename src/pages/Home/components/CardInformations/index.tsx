import { Box, Typography } from '@material-ui/core';
import React from 'react';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { useStyles } from '../../../../hooks/useStyles';

const badgeColors = {
  purple: '#5653FF',
  orange: '#FF9153',
  disabled: '#444',
};

interface ICardInformationsProps {
  badgeText: string;
  title: string;
  badgeColor: 'purple' | 'orange' | 'disabled';
  progressBarPercent: number;
  time: string;
  questionsFinished: number;
  questionsTotal: number;
  textDateFromTo: string;
}

const CardInformations: React.FC<ICardInformationsProps> = ({
  badgeText,
  title,
  badgeColor,
  progressBarPercent,
  questionsFinished,
  time,
  questionsTotal,
  textDateFromTo,
}) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.cardInformations}>
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
      <Box component="span" className={classes.cardInformationsProgressBar}>
        <Box
          component="span"
          className={classes.cardInformationsProgressBarFilled}
          style={{ width: `${progressBarPercent}%` }}
        />
      </Box>
      <Box
        component="div"
        className={classes.cardInformationsContainerDetailsTimeQuestions}
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
          {`${questionsFinished}/${questionsTotal} `}
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
