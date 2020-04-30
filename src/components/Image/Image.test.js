import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

describe('<Image />', () => {
  let wrapper;
  let imgUrl ="https://s3.ap-south-1.amazonaws.com/tpng-images/random/original/6be52f0b-56bf-4fdc-abd3-0bec9e58610c.png";
  let altText="tests";
  beforeEach(() => wrapper = shallow(<Image src={imgUrl} alt={altText} />));
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should Render a Image Container', () => {
    expect(wrapper.find('[data-test="image-container"]').length).toEqual(1);
  });
  it('Should pass src prop to Image', () => {
    expect(wrapper.find('[data-test="image-container"]').get(0).props.src).toEqual(imgUrl);
  });
  it('Should pass alt prop to Image', () => {
    expect(wrapper.find('[data-test="image-container"]').get(0).props.alt).toEqual(altText);
  });
});


describe('<Image />', () => {
  let wrapper;
  let imgUrl = "https://s3.ap-south-1.amazonaws.com/tpng-images/random/original/6be52f0b-56bf-4fdc-abd3-0bec9e58610c.png";
  let altText = "tests";
  const props = {
    width: "auto",
    height: "auto",
    paddingRight: "inherit",
    paddingLeft: "inherit",
    paddingTop: "inherit",
    paddingBottom: "inherit",
    objectFit: "initial",
  };
  beforeEach(() => wrapper = shallow(<Image src={imgUrl} alt={altText} {...props} />));
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should Render a Image Container', () => {
    expect(wrapper.find('[data-test="image-container"]').length).toEqual(1);
  });
  it('Should pass src prop to Image', () => {
    expect(wrapper.find('[data-test="image-container"]').get(0).props.src).toEqual(imgUrl);
  });
  it('Should pass alt prop to Image', () => {
    expect(wrapper.find('[data-test="image-container"]').get(0).props.alt).toEqual(altText);
  });
  it('Should pass width prop to Image', () => {
    expect(wrapper.find('[data-test="image-container"]').get(0).props.width).toEqual(props.width);
  });
  it('Should pass height prop to Image', () => {
    expect(wrapper.find('[data-test="image-container"]').get(0).props.height).toEqual(props.height);
  });
  it('Should pass paddingRight prop to Image', () => {
    expect(wrapper.find('[data-test="image-container"]').get(0).props.paddingRight).toEqual(props.paddingRight);
  });
  it('Should pass paddingLeft prop to Image', () => {
    expect(wrapper.find('[data-test="image-container"]').get(0).props.paddingLeft).toEqual(props.paddingLeft);
  });
  it('Should pass paddingTop prop to Image', () => {
    expect(wrapper.find('[data-test="image-container"]').get(0).props.paddingTop).toEqual(props.paddingTop);
  });
  it('Should pass paddingBottom prop to Image', () => {
    expect(wrapper.find('[data-test="image-container"]').get(0).props.paddingBottom).toEqual(props.paddingBottom);
  });
  it('Should pass objectFit prop to Image', () => {
    expect(wrapper.find('[data-test="image-container"]').get(0).props.objectFit).toEqual(props.objectFit);
  });
});
