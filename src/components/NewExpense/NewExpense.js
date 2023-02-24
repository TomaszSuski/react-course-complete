import React from "react";
import ExpenseForm from "./ExpenseForm";
import PropTypes from 'prop-types';
import './newExpense.css';

const NewExpense = ({ expenses, setExpenses }) => {
    return (
        <div className="new-expense">
            <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
        </div>
    );
}

export default NewExpense;

NewExpense.propTypes = {
    expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
    setExpenses: PropTypes.func.isRequired
}
