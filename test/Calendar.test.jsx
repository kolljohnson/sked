//@flow
import React from 'react';

import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Calendar from '../client/components/Calendar.jsx';
import CalendarHeader from '../client/components/CalendarHeader.jsx';
import WeekRow from '../client/components/WeekRow.jsx';

describe('Calendar />', () => {
    it('should contain a Calendar Header component', () => {
	const wrapper = shallow(<Calendar/>);
	expect(wrapper.find(CalendarHeader)).to.have.length(1);
    });

    it('should contain five WeekRow components', () => {
	const wrapper = shallow(<Calendar/>);
	expect(wrapper.find(WeekRow)).to.have.length(5);
    });
});
