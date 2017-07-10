//@flow

import React from 'react';
import Calendar from '../components/Calendar.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
              <h1>Hello World!</h1>
	      <Calendar/>
            </div>
        );
    }
}
