import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <CssBaseline />
    </>
  );
};

export default App;
