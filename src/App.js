import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import EditExpense from './components/EditExpense';
import ExpenseSummary from './components/ExpenseSummary';
import { ExpenseProvider } from './context/ExpenseContext';

function App() {
  return (
    <ExpenseProvider>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Expense</Link></li>
            <li><Link to="/summary">Summary</Link></li>
          </ul>
        </nav>
        <div className="App">
          <Routes>
            <Route path="/" element={<ExpenseList />} />
            <Route path="/add" element={<AddExpense />} />
            <Route path="/edit/:id" element={<EditExpense />} />
            <Route path="/summary" element={<ExpenseSummary />} />
          </Routes>
        </div>
      </Router>
    </ExpenseProvider>
  );
}

export default App;
