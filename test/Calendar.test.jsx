//@flow
import React from 'react';

import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Calendar from '../client/components/Calendar.jsx';
import WeekRow from '../client/components/WeekRow.jsx';

describe('Calendar />', () => {
    it('should contain seven day headings', () => {
	const wrapper = shallow(<Calendar/>);
	expect(wrapper.find('.day-header')).to.have.length(7);
    });

    it('should have a header row', () => {
	const wrapper = shallow(<Calendar/>);
	expect(wrapper.find('.calendar-header')).to.have.length(1);
    });

    it('should have five week rows', () => {
	const wrapper = shallow(<Calendar/>);
	expect(wrapper.find(WeekRow)).to.have.length(5);
    });
});
