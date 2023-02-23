import React from "react";
import PropTypes from 'prop-types';
import ExpenseDate from './ExpenseDate';
import './expenseItem.css';
import Card from "./Card";

export default function ExpenseItem({ title, amount, date }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card>
  );
}

ExpenseItem.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired
}