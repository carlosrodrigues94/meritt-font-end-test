import { Box } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../../../hooks/useStyles';

import { ContainerCardsScrolled } from './styles';

const VerticalCard: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.cardVertical}>
      <div className={classes.divResultsSeeAllLink}>
        <p style={{ margin: '0' }}>
          <b>Seus resultados (6)</b>
          <a
            href="http://localhost:3000"
            rel="host-address"
            style={{ margin: '0 0 0 30px', color: '#FA558F' }}
          >
            Ver todos
          </a>
        </p>
      </div>
      <ContainerCardsScrolled>{children}</ContainerCardsScrolled>
    </Box>
  );
};

export default VerticalCard;
