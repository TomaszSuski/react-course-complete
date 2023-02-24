import React from "react";
import ExpenseForm from "./ExpenseForm";
import PropTypes from 'prop-types';
import './newExpense.css';

const NewExpense = ({ addNewExpense }) => {
    const saveExpenseHandler = (enteredExpense) => {
        const expense = {
            ...enteredExpense,
            id: Math.random().toString() + enteredExpense.title + enteredExpense.amount + enteredExpense.date
        };
        addNewExpense(expense);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={saveExpenseHandler} />
        </div>
    );
}

export default NewExpense;

NewExpense.propTypes = {
    addNewExpense: PropTypes.func.isRequired
}