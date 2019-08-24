import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  btn: {
    margin: theme.spacing(1),
    borderColor: 'white',
    color: 'white',
    height: 40

  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonSizes(props) {
  const classes = useStyles();
  const { handleClick, text } = props
  return (
    <div>
     
      <div>
        <Button variant="outlined" 
         onClick={handleClick}
        className={classes.btn}>
             {text}
        </Button>
      </div>
    </div>
  );
}
