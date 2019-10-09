import "./VariantSelector.scss";

const VariantSelector = props => (
  <div
    className="VariantSelector"
    name={props.option.name}
    key={props.option.name}
  >
    <p>Select {props.option.name}</p>
    <div className="options">
      {props.option.values.map((value) => (
        <button onClick={() => props.handleOptionChange(props.option.name, value.value)} className="value" value={value.value} key={`${props.option.name}-${value.value}`}>{value.value}</button>
      ))}
    </div>
  </div>


);

export default VariantSelector;
