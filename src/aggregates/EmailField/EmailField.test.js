import React from 'react';
import { mount, shallow, render } from 'enzyme';
import EmailField from './EmailField';

describe('<EmailField />', () => {
  let wrapper;
  const updateEmail = () => {};
  beforeEach(() => wrapper = shallow(<EmailField updateEmail={updateEmail} />));

  it('Should Render a EmailField Container', () => {
    expect(wrapper.find('[data-test="email-field-container"]').length).toEqual(1);
  });
  // it('Should pass updateEmail prop to TextInput', () => {
  //   console.log(wrapper.prop('updateEmail'));
  //   expect(wrapper.find('[data-test="email-field-container"]').get(0).props.updateEmail).toBeDefined();
  // });
});


describe('<EmailField /> error check', () => {
  let wrapper;
  const updateEmail = () => { };
  beforeEach(() => wrapper = mount(<EmailField updateEmail={updateEmail} />));
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  // it('Should Render a EmailField Container', () => {
  //   expect(wrapper.find('[data-test="email-field-container"]').length).toEqual(1);
  // });
  it('Should pass updateEmail prop to TextInput', () => {
    const input = wrapper.find('input');
    input.simulate('focus');
    input.simulate('change', { target: { value: 'Test Data' } });
    // expect(input.get(0).value).toEqual('Test Data');
  });
  it('Should show Error message is text is not more than 5 character long', () => {
    
  });
  it('Should show Error message if onBlur is fired and text is empty', () => {

  });
  it('Should show Error message if it is an invalid Emails', () => {

  });
});
