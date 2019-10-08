const AccordionSection = (props) => {

  return (
    <div
      style={{
        borderTop: '1px solid black',
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
        padding: '5px 10px',
      }}
    >
      <div onClick={() => props.handleSectionClick(props.label)} style={{ cursor: 'pointer' }}>
        {props.label}
        <div style={{ float: 'right' }}>
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