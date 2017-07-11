//@flow

import React from 'react';

import styles from '../css/calendar.css';
import WeekRow from './WeekRow.jsx';

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

	      {[...Array(5)].map((x, i) =>
		  <WeekRow key={i}/>	      
	      )}
	    </div>
        );
    }
}
