import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import EditExpense from './components/EditExpense';
import ExpenseSummary from './components/ExpenseSummary';
import { ExpenseProvider } from './context/ExpenseContext';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

function App() {
  return (
    <ExpenseProvider>
      <Router>
      <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/add">Add Expense</Button>
            <Button color="inherit" component={Link} to="/summary">Summary</Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ padding: 3 }}>
          <Routes>
            <Route path="/" element={<ExpenseList />} />
            <Route path="/add" element={<AddExpense />} />
            <Route path="/edit/:id" element={<EditExpense />} />
            <Route path="/summary" element={<ExpenseSummary />} />
          </Routes>
        </Box>
      </Router>
    </ExpenseProvider>
  );
}

export default App;
