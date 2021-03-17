import React from 'react';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
//import { makeStyles } from '@material-ui/core/styles';

/*const useStyles = makeStyles({
  app: {
  },
});*/

function App() {
  //const classes = useStyles();

  return (
    <div className="app">
      <Menu />
      <Main />
    </div>
  );
}

export default App;
