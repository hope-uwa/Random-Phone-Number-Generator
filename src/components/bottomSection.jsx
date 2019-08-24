import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Save';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#f5f5f5'
  },
});

export default function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { style, download, toggleSort,
           highest, lowest, isAscending } = props
    
  return (
    <div>
    {
        highest &&
    <BottomNavigation
        value={value > 2 && value}
        style={style}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        showLabels
        className={classes.root}
        >
        { highest && <BottomNavigationAction 
        label="Maximum Phone no" 
        icon={ <span style={{fontSize:18, fontWeight: 'bold'}}>{highest}</span>} />
        }
        { lowest && <BottomNavigationAction 
        label="Lowest Phone no" 
        icon={<span style={{fontSize:18, fontWeight: 'bold' }}>{lowest}</span>} />
        }
        <BottomNavigationAction onClick={download}label="Download" icon={<RestoreIcon />} />
        {!isAscending ? <BottomNavigationAction onClick={toggleSort} label="Make Ascending" icon={<ArrowUpwardIcon />} /> :
        <BottomNavigationAction onClick={toggleSort} label="Make Descending" icon={<ArrowDownwardIcon />} />}
    </BottomNavigation>
    }
    </div>
    
  );
}
