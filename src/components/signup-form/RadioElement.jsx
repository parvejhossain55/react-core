import React from "react";
import PropTypes from "prop-types";

function RadioElement(props) {
    return (
        <div className="form-check form-check-inline mb-3">
            <label htmlFor={props.value} className="form-check-label">
                <input
                    type={props.type}
                    className="form-check-input"
                    name={props.name}
                    id={props.value}
                    value={props.value}
                    onChange={props.onChange}
                />
                {props.label}
            </label>
        </div>
    );
}

RadioElement.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

RadioElement.defaultProps = {
    label: "",
};

export default RadioElement;
