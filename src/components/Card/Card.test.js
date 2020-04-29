import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('<Card />', () => {
  let wrapper;
  const text = "This is a test card";
  beforeEach(() => wrapper = shallow(<Card>{text}</Card>));

  it('Should Render a Card Container', () => {
    expect(wrapper.find('[data-test="card-container"]').length).toEqual(1);
  });
  it('Should Render a Card Container', () => {
    expect(wrapper.text()).toEqual(text);
  });
});



describe('<Card {...props} />', () => {
  let wrapper;
  const text = "This is a test card";
  let props = {
    width: "auto",
    height: "auto",
    paddingRight: "inherit",
    paddingLeft: "inherit",
    paddingTop: "inherit",
    paddingBottom: "inherit",
    textAlign: "initial",
  };
  beforeEach(() => wrapper = shallow(<Card {...props} >{text}</Card>));

  it('Should Render a Card Container', () => {
    expect(wrapper.find('[data-test="card-container"]').length).toEqual(1);
  });
  it('Should Render a Card Container', () => {
    expect(wrapper.text()).toEqual(text);
  });

  it('Should pass backgroundColor prop to Button as auto', () => {
    expect(wrapper.find('[data-test="card-container"]').get(0).props.width).toEqual(props.width);
  });
  it('Should pass backgroundColor prop to Button as auto', () => {
    expect(wrapper.find('[data-test="card-container"]').get(0).props.height).toEqual(props.height);
  });
  it('Should pass backgroundColor prop to Button as inherit', () => {
    expect(wrapper.find('[data-test="card-container"]').get(0).props.paddingRight).toEqual(props.paddingRight);
  });
  it('Should pass backgroundColor prop to Button as inherit', () => {
    expect(wrapper.find('[data-test="card-container"]').get(0).props.paddingLeft).toEqual(props.paddingLeft);
  });
  it('Should pass backgroundColor prop to Button as inherit', () => {
    expect(wrapper.find('[data-test="card-container"]').get(0).props.paddingTop).toEqual(props.paddingTop);
  });
  it('Should pass backgroundColor prop to Button as inherit', () => {
    expect(wrapper.find('[data-test="card-container"]').get(0).props.paddingBottom).toEqual(props.paddingBottom);
  });
  it('Should pass backgroundColor prop to Button as initial', () => {
    expect(wrapper.find('[data-test="card-container"]').get(0).props.textAlign).toEqual(props.textAlign);
  });
});