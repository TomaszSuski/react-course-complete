import React, { useState } from "react";
import PropTypes from "prop-types";
import ExpensesList from "./ExpensesList";
import "./expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("");
  const filteredList = expenses.filter(
    (expense) => expense.date.getFullYear() === +selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <ExpensesList
        expenses={expenses}
        filteredList={filteredList}
        selectedYear={selectedYear}
      />
    </Card>
  );
}

Expenses.propTypes = {
  expenses: PropTypes.array.isRequired,
};
