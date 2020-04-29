import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

describe('<TextInput />', () => {
  let wrapper;
  let onInputChange = sinon.spy();
  let onInputBlur = sinon.spy();
  const text = "This is a test text";
  beforeEach(() => wrapper = shallow(<TextInput text={text} onChange={onInputChange} onBlur={onInputBlur} />));
  it('Should Render a TextInput Container', () => {
    expect(wrapper.find('[data-test="text-input-container"]').length).toEqual(1);
  });

  // Should find a way to do test onChange and onBlur
});


describe('<TextInput {...props} />', () => {
  let wrapper;
  const props = {
    color: "#343434",
    fontSize: 14,
    fontWeight: 400,
    fontStyle: "normal",
    fontFamily: 'sans-serif',
    textAlign: "initial",
    lineHeight: null,
    letterSpacing: "0.11px",
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingTop: 0,
    marginLeft: 0,
    marginBottom: 0,
    marginRight: 0,
    marginTop: 0,
    width: 200,
    height: 45,
    borderColor: '#eee'
  };
  beforeEach(() => wrapper = shallow(<TextInput {...props} />));

  it('Should Render a TextInput Container', () => {
    expect(wrapper.find('[data-test="text-input-container"]').length).toEqual(1);
  });

  it('Should pass color prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.color).toEqual(props.color);
  });
  it('Should pass fontSize prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.fontSize).toEqual(props.fontSize);
  });
  it('Should pass fontWeight prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.fontWeight).toEqual(props.fontWeight);
  });
  it('Should pass fontStyle prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.fontStyle).toEqual(props.fontStyle);
  });
  it('Should pass fontFamily prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.fontFamily).toEqual(props.fontFamily);
  });
  it('Should pass textAlign prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.textAlign).toEqual(props.textAlign);
  });
  it('Should pass lineHeight prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.lineHeight).toEqual(props.lineHeight);
  });
  it('Should pass letterSpacing prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.letterSpacing).toEqual(props.letterSpacing);
  });
  it('Should pass paddingLeft prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.paddingLeft).toEqual(props.paddingLeft);
  });
  it('Should pass paddingBottom prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.paddingBottom).toEqual(props.paddingBottom);
  });
  it('Should pass paddingRight prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.paddingRight).toEqual(props.paddingRight);
  });
  it('Should pass paddingTop prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.paddingTop).toEqual(props.paddingTop);
  });
  it('Should pass marginLeft prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.marginLeft).toEqual(props.marginLeft);
  });
  it('Should pass marginBottom prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.marginBottom).toEqual(props.marginBottom);
  });
  it('Should pass marginRight prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.marginRight).toEqual(props.marginRight);
  });
  it('Should pass marginTop prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.marginTop).toEqual(props.marginTop);
  });
  it('Should pass elementType prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.elementType).toEqual(props.elementType);
  });
  it('Should pass width prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.width).toEqual(props.width);
  });
  it('Should pass height prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.height).toEqual(props.height);
  });
  it('Should pass borderColor prop to TextInput', () => {
    expect(wrapper.find('[data-test="text-input-container"]').get(0).props.borderColor).toEqual(props.borderColor);
  });
});

