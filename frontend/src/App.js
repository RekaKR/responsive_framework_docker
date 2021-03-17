import React from 'react';
import Menu from './components/Menu/Menu';
import Text from './components/Text/Text';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="app">
      <Menu />
      <Text />
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default App;
