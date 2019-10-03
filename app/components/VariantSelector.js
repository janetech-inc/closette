

const VariantSelector = props => (
  <div
    className="VariantSelector"
    name={props.option.name}
    key={props.option.name}
    // onChange={props.handleOptionChange}
  >
    <p>Select {props.option.name}</p>
    <div className="options">
      {props.option.values.map((value) => (
        <span className="value" key={`${props.option.name}-${value.value}`}>{value.value}</span>
      ))}
    </div>

    <style>{`
      .VariantSelector {
        display: flex;
        flex-direction: column;
      }

      .options {
        display: flex;
        flex-direction: row;
      }

      .value {
        border: 1px solid black;
        padding: 20px
      }
    `}</style>
  </div>


);

export default VariantSelector;
