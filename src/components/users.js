import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name, age, email, last_login, role) {
  return {
    name, age, email, last_login, role,
  };
}

// TODO: Pull actual users from this page
const rows = [
  createData('John Connor', 159, 6.0, 24, 4.0),
  createData('Satoshi Nakamoto', 237, 9.0, 37, 4.3),
  createData('Jaime Kennedy', 262, 16.0, 24, 6.0),
  createData('Barack Obama', 305, 3.7, 67, 4.3),
  createData('Marshal Matters', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  return (
    <div>
      <Paper>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}> 
                <TableCell component="th" scope="row"> 
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}  