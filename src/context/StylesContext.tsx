import React, { createContext } from 'react';

import { makeStylesClasses } from '../styles/makeStyles';

type IStylesContext = {
  classes: ReturnType<typeof makeStylesClasses>;
};

const StylesContext = createContext<IStylesContext>({} as IStylesContext);

const StylesProvider: React.FC = ({ children }) => {
  const classes = makeStylesClasses();

  return (
    <StylesContext.Provider value={{ classes }}>
      {children}
    </StylesContext.Provider>
  );
};
export { StylesContext, StylesProvider };
