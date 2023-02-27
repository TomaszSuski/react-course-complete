import React from "react";
import PropTypes from 'prop-types';
import Chart from "../Chart/Chart";

export default function ExpensesChart({ filteredList, year }) {

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    for (const expense of filteredList) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return year !== '' ? <Chart dataPoints={chartDataPoints} /> : null;
}

ExpensesChart.propTypes = {
    filteredList: PropTypes.array,
    year: PropTypes.string.isRequired
}

ExpensesChart.defaultProps = {
    filteredList: []
}