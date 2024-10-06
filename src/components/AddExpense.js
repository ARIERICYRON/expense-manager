import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Box } from '@mui/material';
import { ExpenseContext } from '../context/ExpenseContext';

const AddExpense = () => {
  const { addExpense } = useContext(ExpenseContext);
  const [expense, setExpense] = useState({ name: '', amount: '', category: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.name && expense.amount && expense.category) {
      addExpense({ ...expense, id: Date.now() });
      navigate('/');
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto' }}>
      <form onSubmit={handleSubmit}>
        <h2>Add New Expense</h2>
        <TextField
          fullWidth
          label="Expense Name"
          variant="outlined"
          value={expense.name}
          onChange={(e) => setExpense({ ...expense, name: e.target.value })}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Amount"
          variant="outlined"
          type="number"
          value={expense.amount}
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Category</InputLabel>
          <Select
            value={expense.category}
            onChange={(e) => setExpense({ ...expense, category: e.target.value })}
            required
          >
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Transport">Transport</MenuItem>
            <MenuItem value="Entertainment">Entertainment</MenuItem>
          </Select>
        </FormControl>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: 2 }}
        >
          Add Expense
        </Button>
      </form>
    </Box>
  );
};

export default AddExpense;
