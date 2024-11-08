import React, { useState } from 'react';
import './expensetracker.css';

const ExpenseTracker = () => {
  const [input, setInput] = useState('');
  const [amount, setAmount] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleExpense = (e) => {
    setInput(e.target.value);
  };
  const addExpense = () => {
    if (!input || !amount) return;
    const newExpense = {
      id: expenses.length + 1,
      title: input,
      amount: amount,
    };
    setExpenses([...expenses, newExpense]);
    setInput('');
    setAmount('');
  };
  const deleteExpense =(id)=>{
    setExpenses(expenses.filter((expenses)=>expenses.id !==id ))
  }

  return (
    <div className='container'>
      <div>
        <h2>Expense Tracker</h2>
      </div>
      <div className='input-section '>
        <input
          type="text"
          placeholder="Expense..."
          value={input}
          onChange={handleExpense}
        />
        <input
          type="number"
          placeholder="Amount..."
          value={amount}
          onChange={handleAmount}
        />
        <div>
          <button onClick={addExpense} className='btn'>Add Amount</button>
        </div>
      </div>
      <div>
        <ul className="expense-list">
          {expenses.map((expense) => (
            <li key={expense.id}>
              <span>{expense.title}</span>
              <span>${expense.amount}</span>
              <button onClick={()=> deleteExpense(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracker;
