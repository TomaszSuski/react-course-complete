import React from 'react';
import PropTypes from 'prop-types';
import './expensesFilter.css';

const ExpensesFilter = ({ selectedYear, setSelectedYear }) => {
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={(e) => setSelectedYear(e.target.value)}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

ExpensesFilter.propTypes = {
  selectedYear: PropTypes.string,
  setSelectedYear: PropTypes.func.isRequired
}

ExpensesFilter.defaultProps = {
  selectedYear: null
}