//@flow
import React from 'react';

import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import CalendarHeader from '../client/components/CalendarHeader.jsx';

chai.use(chaiEnzyme());

describe('<CalendarHeader/>', () => {
    it('header row cells should contain days of the week', () => {
	const wrapper = shallow(<CalendarHeader/>);
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	expect(wrapper.find('.calendar-header')).to.contain.text(days.join(''));
    });
});
