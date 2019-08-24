import React from 'react';
import { shallow } from 'enzyme';
import BottomSection from '../bottomSection'

describe('Render Bottom Session component', () => {
    let props = {
        style: {}, 
        download: jest.fn(), 
        toggleSort: jest.fn(),
        highest: 123, 
        lowest: 1, 
        isAscending: true
      };

  
  it('should render successfully', ()=> {
    const wrapper = shallow(<BottomSection {...props} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should not render the the component', () => {
    const wrapper = shallow(<BottomSection {...props} />);
    expect(wrapper.length).toBe(1);

  });

  it('should not render the the component', () => {
    const wrapper = shallow(<BottomSection {...props} />);
    props.highest = true
    expect(wrapper.length).toBe(1);
  });
  
  
});
