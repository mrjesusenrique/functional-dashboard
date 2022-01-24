import React from "react";
import PropTypes from "prop-types";
import icons from "./icons";

const Icon = ({ glyph }) =>
  icons[glyph] ? (
    <img src={icons[glyph]} alt={`${glyph}-icon`} title="Home" />
  ) : null;

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
};

export default Icon;
