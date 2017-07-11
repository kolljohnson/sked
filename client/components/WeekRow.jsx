//@flow
import React from 'react';

import styles from '../css/calendar.css';

export default class WeekRow extends React.Component {
    render() {
	return (
	    <div className="week-row row">
	      <div className="cell"></div>
	      <div className="cell"></div>
	      <div className="cell"></div>
	      <div className="cell"></div>
	      <div className="cell"></div>
	      <div className="cell"></div>
	      <div className="cell"></div>	      
	    </div>
	);
    }
}


