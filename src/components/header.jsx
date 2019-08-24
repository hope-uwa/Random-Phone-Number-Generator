import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from './button';
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '160px',
    height: 40,
    alignSelf: 'center',
    alignItems: ''
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'flex',
  },
}));

export function PrimarySearchAppBar(props) {
  const classes = useStyles(); 
  const [ amount, setAmount ] = useState(100)
  const { handleGenerate } = props;

  const handleSubmit = () =>{
      handleGenerate(amount)
  }
  const onChange =(e) => {
      const { value } = e.target
     const amountValue =  value === '' ? 100 : Number(value);
    !isNaN(value) && value.length <= 5 && setAmount(amountValue)
      
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography className={classes.title} variant="h6" noWrap>
            PNGenerator
          </Typography>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <div className={classes.search}>
            <InputBase
              id="input"
              value={amount}
              placeholder="Enter Amount…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={onChange}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            <Button 
                id='button'
                text={'Generate'}
                handleClick={handleSubmit}
             />
          </div>
          <div className={classes.sectionMobile}>
          
          </div>
        </Toolbar>
      </AppBar>
     
    </div>
  );
}

export default PrimarySearchAppBar
