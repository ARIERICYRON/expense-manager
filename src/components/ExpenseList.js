import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ExpenseContext } from '../context/ExpenseContext';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Box } from '@mui/material';

const ExpenseList = () => {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto' }}>
      <h2>Expense List</h2>
      <Button variant="contained" color="primary" component={Link} to="/add" sx={{ marginBottom: 2 }}>
        Add New Expense
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Expense Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.name}</TableCell>
              <TableCell>${expense.amount}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell>
                <Button variant="contained" color="secondary" component={Link} to={`/edit/${expense.id}`} sx={{ marginRight: 1 }}>
                  Edit
                </Button>
                <Button variant="contained" color="error" onClick={() => deleteExpense(expense.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ExpenseList;
