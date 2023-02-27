import React, { useState } from "react";
import PropTypes from "prop-types";
import "./expenseForm.css";

const ExpenseForm = ({ setExpenses }) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const [formVisible, setFormVisible] = useState(false);

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
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  const toggleVisible = () => {
    let isFormVisible = !formVisible;
    console.log(formVisible);
    console.log(isFormVisible);
    setFormVisible(isFormVisible);
  };
  if (formVisible === false) {
    return (
      <div className="new-expense__actions">
        <button onClick={toggleVisible}>Add new expense</button>
      </div>
    );
  } else {
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
        <div>
          <button onClick={toggleVisible}>Cancel</button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
};

export default ExpenseForm;

ExpenseForm.propTypes = {
  setExpenses: PropTypes.func.isRequired,
};
