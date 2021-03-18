import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  width: 250,
  height: 80,
  //color: 'black',
  backgroundColor: 'black',
  margin: '50px 0',
  padding: '0 50px',
  fontFamily: '"Libre Franklin", sans-serif',
  fontWeight: 700,
  fontSize: 24,
  letterSpacing: '4.5px',
  border: 0,
  borderRadius: 50,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  '@media (max-width: 520px)': {
    width: 200,
    height: 60,
    fontWeight: 500,
    fontSize: 16,
  },
  '&:hover': {
    color: 'black',
    backgroundColor: 'white'
  },
});

function ButtonM() {
  return (
    <MyButton variant="contained" color="primary">
      Apply
    </MyButton>
  );
}

export default ButtonM;
