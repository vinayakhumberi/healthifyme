import React from "react";
import PropTypes from "prop-types";
import { Container } from "./style";

const Card = function (props) {
  return (
    <Container
      data-test="card-container"
      {...props}
    >
     {props.children}
    </Container>
  );
};
Card.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  textAlign: PropTypes.string,
};

Card.defaultProps = {
  width: "auto",
  height: "auto",
  paddingRight: "inherit",
  paddingLeft: "inherit",
  paddingTop: "inherit",
  paddingBottom: "inherit",
  textAlign: "initial",
};

export default Card;
