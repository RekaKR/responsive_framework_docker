import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ButtonM from '../ButtonM/ButtonM';


const useStyles = makeStyles({
  container: {
    width: '500px',
    minHeight: '200px',
    paddingLeft: '60px'
  },
  header: {
    color: 'white',
    fontSize: '5rem',
    fontFamily: '"Libre Franklin", sans-serif',
    fontWeight: '700',
    letterSpacing: '4.5px',
  },
  paragraph: {
    width: '400px',
    fontSize: '1rem',
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: '400',
    lineHeight: '200%',
  }
});

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Find Your Dream Job with Us</h1>
      <p className={classes.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Scelerisque varius morbi enim nunc. Lorem ipsum dolor sit amet consectetur adipiscing elit.
      </p>

      <ButtonM />

    </div>
  )
}

export default Main;