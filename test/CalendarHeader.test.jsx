//@flow
import React from 'react';

import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import CalendarHeader from '../client/components/CalendarHeader.jsx';

chai.use(chaiEnzyme());

describe('<CalendarHeader/>', () => {
    it('should contain seven day headings', () => {
	const wrapper = shallow(<CalendarHeader/>);
	expect(wrapper.find('.day-header')).to.have.length(7);
    });

    it('should have a header row', () => {
	const wrapper = shallow(<CalendarHeader/>);
	expect(wrapper.find('.calendar-header')).to.have.length(1);
    });
    
    it('header row cells should contain days of the week', () => {
	const wrapper = shallow(<CalendarHeader/>);
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	expect(wrapper.find('.calendar-header')).to.contain.text(days.join(''));
    });
});
