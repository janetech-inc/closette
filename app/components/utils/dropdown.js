import React from "react";
import PropTypes from "prop-types";
import { StyledDropdown, SelectedItem } from "./dropdown.styles";
import {
  CopyStyleThree,
} from "../global-styles/text-styles";

const Dropdown = ({
  onClick,
  className,
  label,
  selected,
  small,
}) => (
  <StyledDropdown
    className={className}
    onClick={onClick}
    small={small}
    >
    {
      label &&
        <CopyStyleThree>
          {label}
        </CopyStyleThree>
    }
    <SelectedItem>
      {selected}
    </SelectedItem>
  </StyledDropdown>
);

Dropdown.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  selected: PropTypes.string,
};

Dropdown.defaultProps = {
  className: "",
  onClick: () => undefined,
  label: "",
  selected: "",
};

export default Dropdown;
