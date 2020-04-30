import React from 'react';
import { mount, shallow, render } from 'enzyme';
import OTPField from './OTPField';

describe('<OTPField />', () => {
  let wrapper;
  const updateOTP = () => { };
  beforeEach(() => wrapper = shallow(<OTPField updateOTP={updateOTP} />));

  it('Should Render a OTPField Container', () => {
    expect(wrapper.find('[data-test="otp-field-container"]').length).toEqual(1);
  });
});


describe('<OTPField /> error check', () => {
  let wrapper;
  const updateOTP = () => { };
  beforeEach(() => wrapper = mount(<OTPField updateOTP={updateOTP} />));
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  // it('Should Render a OTPField Container', () => {
  //   expect(wrapper.find('[data-test="otp-field-container"]').length).toEqual(1);
  // });
  it('Should pass updateOTP prop to TextInput', () => {
    const input = wrapper.find('input');
    input.simulate('focus');
    input.simulate('change', { target: { value: 'Test Data' } });
    // expect(input.get(0).value).toEqual('Test Data');
  });
  it('Should show Error message is text is not more than 6 character long', () => {

  });
  it('Should show Error message if onBlur is fired and text is empty', () => {

  });
  it('Should show Error message if it is an invalid OTP', () => {

  });
});
