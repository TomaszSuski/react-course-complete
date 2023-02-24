import React, { useState } from "react";
import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";
import "./expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState(null);
  console.log(selectedYear);
  return (
    <Card className="expenses">
            <ExpensesFilter selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
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
