//@flow
import React from 'react';

import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import WeekRow from '../client/components/WeekRow.jsx';

describe('<WeekRow />', () => {
    it('should have seven event cells', () => {
	const wrapper = shallow(<WeekRow/>);
	expect(wrapper.find('.cell')).to.have.length(7);
    });
});
