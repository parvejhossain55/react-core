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
                    className={
                        props.error ? "form-control is-invalid" : "form-control"
                    }
                    name={props.name}
                    id={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
                {props.error && <div className="invalid-feedback">{props.error}</div>}
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
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

InputElement.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
};

export default InputElement;
