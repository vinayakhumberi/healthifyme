import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';

describe('<Text />', () => {
  let wrapper;
  const text = "This is a test text";
  beforeEach(() => wrapper = shallow(<Text text={text} />));

  it('Should Render a Text Container', () => {
    expect(wrapper.find('[data-test="text-container"]').length).toEqual(1);
  });
  it('Should Render a Text Container', () => {
    expect(wrapper.text()).toEqual(text);
  });
});


describe('<Text {...props} />', () => {
  let wrapper;
  const props = {
      color: "#ffffff",
      fontSize: 14,
      fontWeight: 400,
      fontStyle: "normal",
      fontFamily: 'sans-serif',
      textAlign: "initial",
      lineHeight: null,
      letterSpacing: "0.11px",
      text: "This is a test text",
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 0,
      paddingTop: 0,
      marginLeft: 0,
      marginBottom: 0,
      marginRight: 0,
      marginTop: 0,
      elementType: "div"
  }
  beforeEach(() => wrapper = shallow(<Text {...props} />));

  it('Should Render a Text Container', () => {
    expect(wrapper.find('[data-test="text-container"]').length).toEqual(1);
  });
  it('Should Render a Text Container', () => {
    expect(wrapper.text()).toEqual(props.text);
  });
  it('Should pass color prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.color).toEqual(props.color);
  });
  it('Should pass fontSize prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.fontSize).toEqual(props.fontSize);
  });
  it('Should pass fontWeight prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.fontWeight).toEqual(props.fontWeight);
  });
  it('Should pass fontStyle prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.fontStyle).toEqual(props.fontStyle);
  });
  it('Should pass fontFamily prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.fontFamily).toEqual(props.fontFamily);
  });
  it('Should pass textAlign prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.textAlign).toEqual(props.textAlign);
  });
  it('Should pass lineHeight prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.lineHeight).toEqual(props.lineHeight);
  });
  it('Should pass letterSpacing prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.letterSpacing).toEqual(props.letterSpacing);
  });
  it('Should pass text prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.text).toEqual(props.text);
  });
  it('Should pass paddingLeft prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.paddingLeft).toEqual(props.paddingLeft);
  });
  it('Should pass paddingBottom prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.paddingBottom).toEqual(props.paddingBottom);
  });
  it('Should pass paddingRight prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.paddingRight).toEqual(props.paddingRight);
  });
  it('Should pass paddingTop prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.paddingTop).toEqual(props.paddingTop);
  });
  it('Should pass marginLeft prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.marginLeft).toEqual(props.marginLeft);
  });
  it('Should pass marginBottom prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.marginBottom).toEqual(props.marginBottom);
  });
  it('Should pass marginRight prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.marginRight).toEqual(props.marginRight);
  });
  it('Should pass marginTop prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.marginTop).toEqual(props.marginTop);
  });
  it('Should pass elementType prop to Text', () => {
    expect(wrapper.find('[data-test="text-container"]').get(0).props.elementType).toEqual(props.elementType);
  });
});

