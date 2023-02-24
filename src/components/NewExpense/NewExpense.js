import React from "react";
import ExpenseForm from "./ExpenseForm";
import PropTypes from "prop-types";
import "./newExpense.css";

const NewExpense = ({ setExpenses }) => {
  return (
    <div className="new-expense">
      <ExpenseForm setExpenses={setExpenses} />
    </div>
  );
};

export default NewExpense;

NewExpense.propTypes = {
  setExpenses: PropTypes.func.isRequired,
};
