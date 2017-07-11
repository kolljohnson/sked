//@flow

import React from 'react';

import styles from '../css/calendar.css';

export default class CalendarHeader extends React.Component {
    
    render() {
	return (
	    <div className="calendar-header">
		<div className="day-header">Monday</div>
		<div className="day-header">Tuesday</div>
		<div className="day-header">Wednesday</div>
		<div className="day-header">Thursday</div>
		<div className="day-header">Friday</div>
		<div className="day-header">Saturday</div>
		<div className="day-header">Sunday</div>
	    </div>
	);
    }
}
