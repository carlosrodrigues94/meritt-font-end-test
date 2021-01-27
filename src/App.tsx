import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import 'react-circular-progressbar/dist/styles.css';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
      <CssBaseline />
    </>
  );
};

export default App;
