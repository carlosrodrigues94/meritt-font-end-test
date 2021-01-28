import { Box, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { StylesContext } from '../../context/StylesContext';
import CardInformations from './components/CardInformations';
import CardResultsInformations from './components/CardResultsInformations ';
import HorizontalCard from './components/HorizontalCard';
import VerticalCard from './components/VerticalCard';

const Home: React.FC = () => {
  const { classes } = useContext(StylesContext);

  return (
    <>
      <Box component="div" className={classes.homeContainer}>
        <Box
          component="div"
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            maxWidth: '1132px',
          }}
        >
          <Typography variant="h2" className={classes.homeTitleUserName}>
            Olá, Luiza Martins
          </Typography>
        </Box>
        <Box component="div" className={classes.contentContainerCards}>
          <Box component="div" className={classes.containerHorizontalCards}>
            <HorizontalCard containerText="Provas em progresso (4)">
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
            </HorizontalCard>
            <HorizontalCard containerText="Próximas Provas (2)">
              <CardInformations
                badgeText="Avaliação trimestral 20.3"
                title="Inglês"
                badgeColor="orange"
                progressBarPercent={15}
                time="00:45:00"
                questionsTotal={10}
                textDateFromTo="De 20/12/20 a 20/01/21"
                hideProgressBar
              />

              <CardInformations
                badgeText="Simulado ENEM 2021"
                title="Matemática"
                badgeColor="disabled"
                progressBarPercent={35}
                time="01:30:00"
                questionsTotal={45}
                textDateFromTo="De 20/12/20 a 20/01/21"
                isDisabled
                hideProgressBar
              />
            </HorizontalCard>
          </Box>

          <VerticalCard>
            <CardResultsInformations
              badgeText="Simulado ENEM 2021"
              title="Lingugens e Códigos"
              badgeColor="purple"
              progressBarPercent={70}
              time="00:20:45"
              questionsFinished={36}
              questionsTotal={45}
              textDateFromTo="De 20/12/20 a 20/01/21"
            />
            <CardResultsInformations
              badgeText="Simulado ENEM 2021"
              title="Biologia"
              badgeColor="purple"
              progressBarPercent={70}
              time="00:20:45"
              questionsFinished={3}
              questionsTotal={10}
              textDateFromTo="De 20/12/20 a 20/01/21"
            />
            <CardResultsInformations
              badgeText="Simulado ENEM 2021"
              title="Química"
              badgeColor="purple"
              progressBarPercent={70}
              time="00:20:45"
              questionsFinished={5}
              questionsTotal={10}
              textDateFromTo="De 20/12/20 a 20/01/21"
            />
            <CardResultsInformations
              badgeText="Simulado ENEM 2021"
              title="Ciências Humanas"
              badgeColor="purple"
              progressBarPercent={70}
              time="00:20:45"
              questionsFinished={31}
              questionsTotal={45}
              textDateFromTo="De 20/12/20 a 20/01/21"
            />
          </VerticalCard>
        </Box>
      </Box>
    </>
  );
};

export default Home;
