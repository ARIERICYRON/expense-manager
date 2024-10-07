import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { Box, Typography, Paper } from '@mui/material';

const ExpenseSummary = () => {
  const { expenses } = useContext(ExpenseContext);

  const totalExpenses = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  const categorizedExpenses = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + parseFloat(expense.amount);
    return acc;
  }, {});

  return (
    <Box sx={{ maxWidth: 500, margin: 'auto', padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" sx={{ marginBottom: 2, textAlign: 'center' }}>Expense Summary</Typography>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>Total Expenses: ${totalExpenses.toFixed(2)}</Typography>
        <Typography variant="subtitle1">Expenses by Category:</Typography>
        <Box sx={{ marginTop: 2 }}>
          {Object.keys(categorizedExpenses).map((category) => (
            <Typography key={category} variant="body1" sx={{ marginBottom: 1 }}>
              {category}: ${categorizedExpenses[category].toFixed(2)}
            </Typography>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default ExpenseSummary;
