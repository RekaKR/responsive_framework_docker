import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  height: 48,
  color: 'white',
  backgroundColor: 'black',
  padding: '0 30px',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
});

function ButtonM() {
  return (
    <MyButton variant="contained" color="primary">
      Apply
    </MyButton>
  );
}

export default ButtonM;
