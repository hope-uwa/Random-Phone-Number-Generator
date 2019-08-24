import React from 'react';
import { shallow } from 'enzyme';
import NumberDisplay from '../numberDisplay'

describe('Render Bottom Session component', () => {
    let props = {
        data : [ [1,2,3,4,5,6,7,8,9],
        [1,2,3,4,5,6,7,8,9]]
      };

  
  it('should render successfully', ()=> {
    const wrapper = shallow(<NumberDisplay {...props} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should not render the the component', () => {
    const wrapper = shallow(<NumberDisplay {...props} />);
    expect(wrapper.length).toBe(1);

  });
  
  
});
