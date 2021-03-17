import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ButtonM from '../ButtonM/ButtonM';


const useStyles = makeStyles({
  container: {
    maxWidth: '700px',
    minHeight: '200px',
    marginTop: '70px',
    marginRight: '30px',
    paddingLeft: '70px',
    lineHeight: '125px',
    '@media (max-width: 850px)': {
      marginTop: '150px',
    },
    '@media (max-width: 700px)': {
      marginTop: '200px',
      paddingLeft: '40px',
    },
    '@media (max-width: 600px)': {
      maxWidth: '100%',
    },
    '@media (max-width: 435px)': {
      marginRight: '0',
    }
  },
  header: {
    color: 'white',
    fontSize: '7rem',
    fontFamily: '"Libre Franklin", sans-serif',
    fontWeight: '700',
    letterSpacing: '4.5px',
    wordSpacing: '10px',
    '@media (max-width: 850px)': {
      fontSize: '6rem',
      letterSpacing: '2.5px',
      lineHeight: '100px',
    },
    '@media (max-width: 600px)': {
      fontSize: '5rem',
      wordSpacing: '7px',
      lineHeight: '80px',
    },
    '@media (max-width: 520px)': {
      fontWeight: '500',
      fontSize: '13vw',
      lineHeight: '13vw',
    }
  },
  paragraph: {
    width: '60%',
    marginTop: '30px',
    paddingLeft: '10px',
    fontSize: '1.2rem',
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: '400',
    lineHeight: '2.2rem',
    '@media (max-width: 700px)': {
      width: '90%',
      paddingLeft: '6px',
    },
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