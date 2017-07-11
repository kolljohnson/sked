//@flow

import React from 'react';

import styles from '../css/calendar.css';

export default class Calendar extends React.Component {
    render() {
	return (
	    <div className="calendar">
	      <div className="calendar-header row">
		<div className="day-header"></div>
		<div className="day-header"></div>
		<div className="day-header"></div>
		<div className="day-header"></div>
		<div className="day-header"></div>
		<div className="day-header"></div>
		<div className="day-header"></div>
	      </div>
	      <div className="week-row row"></div>
	      <div className="week-row row"></div>
	      <div className="week-row row"></div>
	      <div className="week-row row"></div>
	      <div className="week-row row"></div>
	    </div>
        );
    }
}
