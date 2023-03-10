import React, { useState } from "react";
import PropTypes from "prop-types";
import "./expenseForm.css";

const ExpenseForm = ({ setExpenses, toggleFormVisibile }) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
      id:
        Math.random().toString() +
        userInput.enteredTitle +
        userInput.enteredAmount +
        userInput.enteredDate,
    };
    if (
      expenseData.title.length > 0 &&
      expenseData.amount > 0 &&
      !isNaN(expenseData.date.getTime())
    ) {
      setExpenses((prevExpenses) => {
        return [expenseData, ...prevExpenses];
      });
    } else {
      alert(
        "Invalid input data. Please enter proper Expense title, amount and choose proper date to proceed"
      );
    }
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    toggleFormVisibile();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
        <button type="button" onClick={toggleFormVisibile}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

ExpenseForm.propTypes = {
  setExpenses: PropTypes.func.isRequired,
  toggleFormVisibile: PropTypes.func.isRequired,
};
