import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../Header'

describe('Render Bottom Session component', () => {
    let props = {
        handleGenerate: jest.fn()
      };

  
  it('should render successfully', ()=> {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should not render the the component', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.length).toBe(1);

  });

  it('should button be clicked', ()=> {
    const mockCallBack = jest.fn();

    const button = mount((<Header {...props} onClick={mockCallBack}/>));
    button.find('button').simulate('click');
    expect(props.handleGenerate).toBeCalledTimes(1);
  })

  
});
