import PropTypes from "prop-types";

const InputElement = (props) => (
    <div className="form-group">
        <label htmlFor={props.name} className="form-label">
            {props.label}
        </label>
        <input
            className="form-control"
            type={props.type}
            id={props.name}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    </div>
);

InputElement.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

InputElement.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
};

export default InputElement;
