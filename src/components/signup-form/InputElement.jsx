import React from "react";
import PropTypes from "prop-types";

function InputElement(props) {
    return (
        <div>
            <div className="mb-3">
                <label htmlFor={props.name} className="form-label">
                    {props.label}
                </label>
                <input
                    type={props.type}
                    className="form-control"
                    name={props.name}
                    id={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        </div>
    );
}

InputElement.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

InputElement.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
};

export default InputElement;
