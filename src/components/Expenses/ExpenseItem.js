import React, { useState } from "react";
import PropTypes from 'prop-types';
import ExpenseDate from './ExpenseDate';
import './expenseItem.css';
import Card from "../UI/Card";

export default function ExpenseItem({ title, amount, date }) {
  const [titleString, setTitle] = useState(title);
  const clickHandler = () => {
    setTitle('Updated');
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titleString}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

ExpenseItem.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired
}