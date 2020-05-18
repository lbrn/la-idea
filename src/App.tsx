import React from 'react';
import './index.css';

import { makeStyles } from '@material-ui/styles';
import Header from './Header';

const useStyles = makeStyles({
  app: {
    width: '100vw',
    height: '100vh',
  },
});

function App() {
  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
