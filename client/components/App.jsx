//@flow

import React from 'react';

import styles from '../css/calendar.css';
import Calendar from '../components/Calendar.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
              <h1>Sked</h1>
	      <Calendar/>
            </div>
        );
    }
}
