import React from "react";
import PropTypes from 'prop-types';
import './card.css';

export default function Card({ children, className }) {
    const classes = `card ${className}`;
    return <div className={classes}>{children}</div>;
}

Card.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string
}

Card.defaultProps = {
    className: null
}