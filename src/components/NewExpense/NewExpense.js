import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import PropTypes from "prop-types";
import "./newExpense.css";

const NewExpense = ({ setExpenses }) => {
  const [formVisible, setFormVisible] = useState(false);
  const toggleVisible = () => {
    let isFormVisible = !formVisible;
    setFormVisible(isFormVisible);
  };
  return (
    <div className="new-expense">
      {!formVisible && <button onClick={toggleVisible}>Add new expense</button>}
      {formVisible && <ExpenseForm setExpenses={setExpenses} toggleFormVisibile={toggleVisible} />}
    </div>
  );
};

export default NewExpense;

NewExpense.propTypes = {
  setExpenses: PropTypes.func.isRequired,
};
