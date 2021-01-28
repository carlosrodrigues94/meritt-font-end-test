import { Box, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import CircularProgressQuestions from '../../../../components/CircularProgressQuestions';
import { StylesContext } from '../../../../context/StylesContext';

const badgeColors = {
  purple: '#5653FF',
  orange: '#FF9153',
  disabled: '#444',
};

interface ICardResultsInformationsProps {
  badgeText: string;
  title: string;
  badgeColor: 'purple' | 'orange' | 'disabled';
  progressBarPercent: number;
  time: string;
  questionsFinished: number;
  questionsTotal: number;
  textDateFromTo: string;
}

const CardResultsInformations: React.FC<ICardResultsInformationsProps> = ({
  badgeText,
  title,
  badgeColor,
  questionsFinished,
  questionsTotal,
}) => {
  const { classes } = useContext(StylesContext);

  return (
    <Box component="div" className={classes.cardInformationsResultContainer}>
      <Box
        component="span"
        className={classes.cardInformationsBadge}
        style={{
          background: badgeColors[badgeColor],
        }}
      >
        <Typography component="p" className={classes.cardInformationBadgeText}>
          {badgeText}
        </Typography>
      </Box>

      <Box
        component="div"
        className={classes.cardInformationsResultDetailsProgress}
      >
        <div
          style={{
            margin: '0 8px 0 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            padding: '0',
            width: '115px',
          }}
        >
          <Typography
            component="h5"
            className={classes.cardInformationsResultTitle}
          >
            {title}
          </Typography>
          <p style={{ margin: '16px 0 0 0' }}>Realizada em 30min</p>
          <p
            style={{
              fontSize: '10px',
              color: '#757575',
              fontWeight: 300,
              margin: '6px 0 0 0',
            }}
          >
            Realizada em 12/15/15
          </p>
        </div>

        <CircularProgressQuestions
          questionsTotal={questionsTotal}
          questionsFinished={questionsFinished}
        />
      </Box>
    </Box>
  );
};

export default CardResultsInformations;
