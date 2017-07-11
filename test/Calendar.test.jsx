//@flow
import React from 'react';

import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Calendar from '../client/components/Calendar.jsx';

describe('Calendar />', () => {
    it('should contain seven day headings', () => {
	const wrapper = shallow(<Calendar/>);
	expect(wrapper.find('.day-header')).to.have.length(7);
    });

    it('should have six rows', () => {
	const wrapper = shallow(<Calendar/>);
	expect(wrapper.find('.row')).to.have.length(6);
    });
});
