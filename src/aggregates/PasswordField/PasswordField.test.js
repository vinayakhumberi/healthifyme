import React from 'react';
import { mount, shallow, render } from 'enzyme';
import PasswordField from './PasswordField';

describe('<PasswordField />', () => {
  let wrapper;
  const updatePassword = () => { };
  beforeEach(() => wrapper = shallow(<PasswordField updatePassword={updatePassword} />));

  it('Should Render a PasswordField Container', () => {
    expect(wrapper.find('[data-test="password-field-container"]').length).toEqual(1);
  });
});


describe('<PasswordField /> error check', () => {
  let wrapper;
  const updatePassword = () => { };
  beforeEach(() => wrapper = mount(<PasswordField updatePassword={updatePassword} />));
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  // it('Should Render a PasswordField Container', () => {
  //   expect(wrapper.find('[data-test="password-field-container"]').length).toEqual(1);
  // });
  it('Should pass updatePassword prop to TextInput', () => {
    const input = wrapper.find('input');
    input.simulate('focus');
    input.simulate('change', { target: { value: 'Test Data' } });
    // expect(input.get(0).value).toEqual('Test Data');
  });
  it('Should show Error message is text is not more than 6 character long', () => {

  });
  it('Should show Error message if onBlur is fired and text is empty', () => {

  });
  it('Should show Error message if it is an invalid Password', () => {

  });
});
