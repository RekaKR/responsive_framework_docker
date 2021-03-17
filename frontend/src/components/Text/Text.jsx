import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  text: {
    width: '500px',
    height: '200px',
    padding: theme.spacing(2),
  },
  header: {
    fontSize: '5rem'
  }
}));

function Text() {
  const classes = useStyles();

  return (
    <div className={classes.text}>
      <h1 className={classes.header}>Find Your Dream Job with Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, delectus temporibus vel cupiditate sed aliquid nihil corporis ipsum necessitatibus non repellendus voluptatibus atque. Culpa vitae suscipit esse facere nesciunt architecto?</p>
    </div>
  )
}

export default Text;