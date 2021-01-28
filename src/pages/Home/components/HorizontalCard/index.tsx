import { Button, Typography } from '@material-ui/core';
import React, { useCallback, useContext, useRef } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ContentScrollingCardInformations } from './styles';
import { StylesContext } from '../../../../context/StylesContext';

interface IHorizontalCard {
  containerText: string;
}

const HorizontalCard: React.FC<IHorizontalCard> = ({
  children,
  containerText,
}) => {
  const { classes } = useContext(StylesContext);

  const refHorizontalCard = useRef<HTMLDivElement>(null);

  const handleNext = useCallback(() => {
    if (!refHorizontalCard.current) return;

    refHorizontalCard.current.scroll({
      left: refHorizontalCard.current.scrollLeft + 25,
    });
  }, []);

  return (
    <>
      <div className={classes.cardHorizontal}>
        <Typography component="h4" className={classes.cardHorizontalTitle}>
          {containerText}
        </Typography>

        <ContentScrollingCardInformations ref={refHorizontalCard}>
          {children}
        </ContentScrollingCardInformations>

        <Button
          type="button"
          onClick={handleNext}
          className={classes.buttonArrowRight}
        >
          <ArrowForwardIosIcon style={{ fontSize: '38px' }} />
        </Button>
      </div>
    </>
  );
};

export default HorizontalCard;
