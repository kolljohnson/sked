//@flow

import React from 'react';

import styles from '../css/calendar.css';

export default class Calendar extends React.Component {
    render() {
	return (
	    <div className="calendar">
	      <div className="day-header"></div>
	      <div className="day-header"></div>
	      <div className="day-header"></div>
	      <div className="day-header"></div>
	      <div className="day-header"></div>
	      <div className="day-header"></div>
	      <div className="day-header"></div>
	    </div>
        );
    }
}
