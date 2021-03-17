import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ButtonM from '../ButtonM/ButtonM';


const useStyles = makeStyles({
  container: {
    width: '700px',
    minHeight: '200px',
    marginTop: '70px',
    paddingLeft: '70px',
    lineHeight: '125px',
  },
  header: {
    color: 'white',
    fontSize: '7rem',
    fontFamily: '"Libre Franklin", sans-serif',
    fontWeight: '700',
    letterSpacing: '4.5px',
    wordSpacing: '10px',
  },
  paragraph: {
    width: '60%',
    marginTop: '30px',
    paddingLeft: '10px',
    fontSize: '1.2rem',
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: '400',
    lineHeight: '2.2rem',
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