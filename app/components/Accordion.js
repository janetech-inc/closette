import React from "react";

import AccordionSection from './AccordionSection';

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    const openSections = {};

    props.children.forEach(child => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });

    this.state = { openSections };
  }

  handleSectionClick = (label) => {
    const {
      props: { allowMultipleOpen },
      state: { openSections },
    } = this;

    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen
        }
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen
        }
      });
    }
  }

  render() {
    const {
      handleSectionClick,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <div style={{borderBottom: '1px solid black', margin: '10px 0'}}>
        {children.map(child => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            handleSectionClick={handleSectionClick}
            key={child.props.label}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export default Accordion;