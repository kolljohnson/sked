//@flow
import React from 'react';

import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../client/components/App.jsx';
import Calendar from '../client/components/Calendar.jsx';

describe('<App />', () => {
   it('should have a heading', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('h1')).to.have.length(1);
   });

   it('should have a calendar element', () => {
      const wrapper = mount(<App/>);
      expect(wrapper.find(Calendar)).to.have.length(1);
   });
});
