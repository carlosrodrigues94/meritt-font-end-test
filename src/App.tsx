import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import 'react-circular-progressbar/dist/styles.css';
import Header from './components/Header';
import { ExamProvider } from './context/ExamContext';

const App: React.FC = () => {
  return (
    <ExamProvider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
      <CssBaseline />
    </ExamProvider>
  );
};

export default App;
