import "./VariantSelector.scss";

const VariantSelector = props => (
  <div
    className="VariantSelector"
    name={props.option.name}
    key={props.option.name}
  >
    <p>Select {props.option.name}</p>
    <div className="variant-options">
      {props.option.values.map((value) => (
        <button 
          onClick={() => props.handleOptionChange(props.option.name, value.value)} 
          className="option" 
          className={props.selectedOptions[props.option.name] == value.value ? 'option selected' : 'option'}
          value={value.value} 
          key={`${props.option.name}-${value.value}`}
        >
          {value.value}
        </button>
      ))}
    </div>
  </div>


);

export default VariantSelector;
