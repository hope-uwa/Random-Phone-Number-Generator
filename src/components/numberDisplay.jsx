import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: '100%',
  },
}));

export default function DenseTable(props) {
  const classes = useStyles();
  const { data } = props

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            { data.map(col=> (
                <TableRow key={col}>
                    {
                      col.map(row  =>  <TableCell key={row} >{row}</TableCell> )
                    }
                </TableRow>
            )) 
            }
          </TableHead>
          
        </Table>
      </Paper>
    </div>
  );
}
