//@flow

import React from 'react';

import styles from '../css/calendar.css';
import CalendarHeader from './CalendarHeader.jsx';
import WeekRow from './WeekRow.jsx';

export default class Calendar extends React.Component {
    
    render() {
	return (
	    <div className="calendar">
	      <CalendarHeader/>

	      {[...Array(5)].map((x, i) =>
		  <WeekRow key={i}/>	      
	      )}
	    </div>
        );
    }
}
