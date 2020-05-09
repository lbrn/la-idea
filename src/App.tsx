import React from 'react';
import './App.css';
import theme from './theme/theme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p style={{color:`${theme.palette.primary.main}`}}>
          LA IDeA website: coming soon
        </p>
      </header>
    </div>
  );
}

export default App;
