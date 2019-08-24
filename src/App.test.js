import React from 'react';
import FileSaver from 'file-saver'
import ReactDOM from 'react-dom';
import App from './App';
import { mount, shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('test App component', () => {

  it('should render correctly', () => {
    const wrapper = mount(<App />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should simulate submit', () => {
    const wrapper = mount(<App />)
    wrapper.find('button').simulate('click');
    expect(typeof(wrapper.state().data)).toEqual('object');
    expect(wrapper.state().data.length).toEqual(100);
  })
  it('should simulate sort toggle and download', () => {
    global.URL.createObjectURL = jest.fn();
    const wrapper = mount(<App />)
    const jsonSpy = jest.spyOn(FileSaver, 'saveAs');
    wrapper.instance().toggleSort()
    wrapper.instance().download()
   expect(wrapper.state().isAscending).toEqual(false);
   expect(jsonSpy).toBeCalledTimes(1)
  

  })
   


})
