import React from 'react';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import './style/style.css'
import useMediaQuery from '@material-ui/core/useMediaQuery';

function App() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div className="app">
      <Menu />
      <Main />
    </div>
  );
}

export default App;
