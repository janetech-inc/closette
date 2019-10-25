import './AccordionSection.scss';

const AccordionSection = (props) => {

  return (
    <div className={props.border ? "AccordionSection border " : "AccordionSection"}>
      <div onClick={() => props.handleSectionClick(props.label)} style={{ cursor: 'pointer' }}>
        {props.label}
        <div className="toggle-icon" style={{ float: props.iconAlignment }}>
          {!props.isOpen && <span>&#43;</span>}
          {props.isOpen && <span>&minus;</span>}
        </div>
      </div>
      {props.isOpen && (
        <div
          style={{
            marginTop: 10,
            padding: '10px 20px',
          }}
        >
          {props.children}
        </div>
      )}
    </div>
  )
}

export default AccordionSection;