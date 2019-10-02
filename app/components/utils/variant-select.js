import React, { useState } from "react";
import { useSpring } from "react-spring";
import PropTypes from "prop-types";
import {
  StyledVariantSelect,
  StyledReturnOption,
  StyledCaretIcon,
  VariantDropdown,
  VariantInventory,
  VariantColor
} from "./variant-select-styles";

const VariantSelect = ({
  type,
  styles,
  className,
  isInactive,
  cta,
  options,
  direction,
  selectHeight,
  setActiveSelectOption,
  activeSelectOption
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelectOptionClick = (e, i) => {
    if (!dropdownOpen) return;
    e.stopPropagation();
    setActiveSelectOption(i);
    setDropdownOpen(false);
  };

  const dropdownAnimation = useSpring({
    height: dropdownOpen ? options.length * selectHeight : selectHeight
  });

  const returnOption = (option, i) => {
    if (!option) return;
    // option should have inventory and color keys in the future
    // const lowInventory = option.inventory <= 2;
    const lowInventory = false;
    return (
      <StyledReturnOption
        key={`${option}-${i}`}
        onClick={e => handleSelectOptionClick(e, i)}
        lowInventory={lowInventory}
        isActive={activeSelectOption === i && dropdownOpen}
      >
        <VariantColor>{option}</VariantColor>
   {/*     <VariantInventory>
          {lowInventory ? "only a few left" : "many left"}
        </VariantInventory>*/}
      </StyledReturnOption>
    );
  };

  if (!options.length) return null;
  return (
    <StyledVariantSelect
      className={className}
      style={styles}
      type={type}
      onClick={isInactive ? undefined : handleDropdownClick}
      name={cta}
      title={cta}
      onMouseDown={e => e.preventDefault()}
    >
      <VariantDropdown style={dropdownAnimation}>
        {returnOption(options[activeSelectOption], activeSelectOption)}
        {options.map((option, i) =>
          i !== activeSelectOption ? returnOption(option, i) : null
        )}
        <StyledCaretIcon direction={direction} open={dropdownOpen} />
      </VariantDropdown>
    </StyledVariantSelect>
  );
};

VariantSelect.propTypes = {
  setActiveSelectOption: PropTypes.func,
  options: PropTypes.array,
  activeSelectOption: PropTypes.number,
  selectHeight: PropTypes.number,
  type: PropTypes.string,
  styles: PropTypes.object,
  className: PropTypes.string,
  isInactive: PropTypes.bool,
  cta: PropTypes.string,
  direction: PropTypes.string
};

VariantSelect.defaultProps = {
  setActiveSelectOption: () => undefined,
  options: [],
  activeSelectOption: 0,
  selectHeight: 44,
  styles: {},
  className: "",
  isInactive: false,
  cta: "Select",
  type: "button",
  direction: "up"
};

export default VariantSelect;
