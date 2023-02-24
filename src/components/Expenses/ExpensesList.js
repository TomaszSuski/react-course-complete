import React from "react";
import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";
import "./expensesList.css";

export default function ExpensesList({ expenses, selectedYear, filteredList }) {
  let expensesContent;

  switch (true) {
    case expenses.length > 0 && selectedYear === "":
      expensesContent = expenses
        .sort((a, b) => a.date - b.date)
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ));
      break;
    case expenses.length > 0 && selectedYear !== "" && filteredList.length > 0:
      expensesContent = filteredList
        .sort((a, b) => a.date - b.date)
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ));
      break;
    default:
      expensesContent = (
        <h2 className="expenses-list__fallback">No expenses found.</h2>
      );
  }

  return <ul className="expenses-list">{expensesContent}</ul>;
}

ExpensesList.propTypes = {
  expenses: PropTypes.array.isRequired,
  filteredList: PropTypes.array.isRequired,
  selectedYear: PropTypes.string.isRequired,
};
