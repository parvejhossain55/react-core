import React from "react";
import PropTypes from "prop-types";
import InputElement from "./InputElement";

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className="mb-3">
                    <InputElement
                        label="Name"
                        name="name"
                        placeholder="Enter Your Name"
                        value={props.values.name}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="mb-3">
                    <InputElement
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter Your Email"
                        value={props.values.email}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="mb-3">
                    <InputElement
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter Your Password"
                        value={props.values.password}
                        onChange={props.handleChange}
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default Form;
