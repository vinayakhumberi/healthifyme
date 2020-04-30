import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  let wrapper;
  let onButtonClick = sinon.spy();
  beforeEach(() => wrapper = mount(<Button onClick={onButtonClick} />));
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should Render a Button Container', () => {
    expect(wrapper.find('button[data-test="button-container"]').length).toEqual(1);
  });
  it('Should Simulate click events', () => {
    wrapper.find('button').simulate('click');
    expect(onButtonClick.callCount).toEqual(1);
  });
});


describe('<Button isDisabled />', () => {
  let wrapper;
  let onButtonClick = sinon.spy();
  beforeEach(() => wrapper = mount(<Button isDisabled onClick={onButtonClick} />));
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should Render a Button Container', () => {
    expect(wrapper.find('button[data-test="button-container"]').length).toEqual(1);
  });
  it('Should pass isDisabled prop to Button as true', () => {
    expect(wrapper.find('[data-test="button-container"]').get(0).props.isDisabled).toEqual(true);
  });
  it('Should Not Simulate click events', () => {
    wrapper.find('button').simulate('click');
    expect(onButtonClick.callCount).toEqual(0);
  });
});



describe('<Button {...props} />', () => {
  let wrapper;
  let props = {
    backgroundColor: '#ec445c',
    color: '#ffffff',
    height: 45,
    width: '100%',
    buttonText: "Text Click",
    fontSize: 14,
    fontWeight: 'normal',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  };
  beforeEach(() => wrapper = mount(<Button {...props} />));
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should Render a Button Container', () => {
    expect(wrapper.find('button[data-test="button-container"]').length).toEqual(1);
  });
  it('Should pass backgroundColor prop to Button as true', () => {
    expect(wrapper.find('[data-test="button-container"]').get(0).props.backgroundColor).toEqual(props.backgroundColor);
  });
  it('Should pass color prop to Button as true', () => {
    expect(wrapper.find('[data-test="button-container"]').get(0).props.color).toEqual(props.color);
  });
  it('Should pass height prop to Button as 45', () => {
    expect(wrapper.find('[data-test="button-container"]').get(0).props.height).toEqual(props.height);
  });
  it('Should pass width prop to Button as 100%', () => {
    expect(wrapper.find('[data-test="button-container"]').get(0).props.width).toEqual(props.width);
  });
  it('Should pass buttonText prop to Button as Test Click', () => {
    expect(wrapper.text()).toEqual(props.buttonText);
  });
  it('Should pass fontSize prop to Button as 14', () => {
    expect(wrapper.find('[data-test="button-container"]').get(0).props.fontSize).toEqual(props.fontSize);
  });
  it('Should pass fontWeight prop to Button as normal', () => {
    expect(wrapper.find('[data-test="button-container"]').get(0).props.fontWeight).toEqual(props.fontWeight);
  });
  it('Should pass marginTop prop to Button as 10', () => {
    expect(wrapper.find('[data-test="button-container"]').get(0).props.marginTop).toEqual(props.marginTop);
  });
  it('Should pass marginBottom prop to Button as 10', () => {
    expect(wrapper.find('[data-test="button-container"]').get(0).props.marginBottom).toEqual(props.marginBottom);
  });
  it('Should pass marginLeft prop to Button as 10', () => {
    expect(wrapper.find('[data-test="button-container"]').get(0).props.marginLeft).toEqual(props.marginLeft);
  });
  it('Should pass marginRight prop to Button as 10', () => {
    expect(wrapper.find('[data-test="button-container"]').get(0).props.marginRight).toEqual(props.marginRight);
  });
});

