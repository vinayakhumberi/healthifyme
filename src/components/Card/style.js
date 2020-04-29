import styled from 'styled-components';
import { rem } from '../../utils/style.util';

export const Container = styled.div`
  width: ${props =>
    typeof props.width === 'string' ? props.width : rem(props.width)};
  height: ${props =>
    typeof props.height === 'string' ? props.height : rem(props.height)};
  padding-right: ${props =>
    typeof props.paddingRight === 'string'
      ? props.paddingRight
      : rem(props.paddingRight)};
  padding-left: ${props =>
    typeof props.paddingLeft === 'string'
      ? props.paddingLeft
      : rem(props.paddingLeft)};
  padding-bottom: ${props =>
    typeof props.paddingBottom === 'string'
      ? props.paddingBottom
      : rem(props.paddingBottom)};
  padding-top: ${props =>
    typeof props.paddingTop === 'string'
      ? props.paddingTop
      : rem(props.paddingTop)};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  text-align: ${props => props.textAlign};
`;