import React from "react";
import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";
import "./expenses.css";
import Card from "./Card";

export default function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

Expenses.propTypes = {
  expenses: PropTypes.array.isRequired,
};
