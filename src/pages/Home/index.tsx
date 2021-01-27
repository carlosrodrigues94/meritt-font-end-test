import { Box } from '@material-ui/core';
import React from 'react';
import Header from '../../components/Header';
import SliderContainer from '../../components/SliderContainer';
import { useStyles } from '../../hooks/useStyles';
import CardInformations from './components/CardInformations';
import HorizontalCard from './components/HorizontalCard';
import VerticalCard from './components/VerticalCard';

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Box component="div" className={classes.homeContainer}>
        <>
          <Box component="div" className={classes.containerHorizontalCards}>
            <HorizontalCard>
              <SliderContainer>
                <div
                  style={{
                    display: 'flex',
                    width: '300px',
                    height: '250px',
                    background: 'red',
                    margin: '8px',
                  }}
                >
                  <CardInformations
                    badgeText="Simulado ENEM 2021"
                    title="Linguagens e Códigos"
                    badgeColor="orange"
                    progressBarPercent={15}
                    time="00:20:45"
                    questionsFinished={14}
                    questionsTotal={45}
                    textDateFromTo="De 20/12/20 a 20/01/21"
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    width: '300px',
                    height: '250px',
                    background: 'red',
                  }}
                >
                  <CardInformations
                    badgeText="Simulado ENEM 2021"
                    title="Matemática"
                    badgeColor="orange"
                    progressBarPercent={35}
                    time="00:20:45"
                    questionsFinished={14}
                    questionsTotal={45}
                    textDateFromTo="De 20/12/20 a 20/01/21"
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    width: '300px',
                    height: '250px',
                    background: 'red',
                  }}
                >
                  <CardInformations
                    badgeText="Simulado ENEM 2021"
                    title="Física"
                    badgeColor="purple"
                    progressBarPercent={70}
                    time="00:20:45"
                    questionsFinished={14}
                    questionsTotal={45}
                    textDateFromTo="De 20/12/20 a 20/01/21"
                  />
                </div>
              </SliderContainer>
            </HorizontalCard>
            <HorizontalCard />
          </Box>

          <VerticalCard />
        </>
      </Box>
    </>
  );
};

export default Home;
