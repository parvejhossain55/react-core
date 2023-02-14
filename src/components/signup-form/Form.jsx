import React from "react";
import InputElement from "./InputElement";
import RadioElement from "./RadioElement";

function Form(props) {
    return (
        <form>
            <InputElement
                name="name"
                label="Name"
                placeholder="Enter Your Name"
                value={props.values.name}
                onChange={props.handleChange}
            />
            <InputElement
                name="email"
                type="email"
                label="Email Address"
                placeholder="Enter Your Email"
                value={props.values.email}
                onChange={props.handleChange}
            />
            <InputElement
                name="password"
                type="password"
                label="Password"
                placeholder="Enter Your Password"
                value={props.values.password}
                onChange={props.handleChange}
            />
            <InputElement
                name="birthDate"
                type="date"
                label="Birth Date"
                value={props.values.birthDate}
                onChange={props.handleChange}
            />
            <RadioElement
                name="gender"
                type="radio"
                label="Male"
                value="male"
                onChange={props.handleChange}
            />
            <RadioElement
                name="gender"
                type="radio"
                label="Female"
                value="female"
                onChange={props.handleChange}
            />
            <RadioElement
                name="gender"
                type="radio"
                label="Other"
                value="other"
                onChange={props.handleChange}
            />
            <div className="form-check mb-3">
                <input
                    name="agree"
                    type="checkbox"
                    id="agreement"
                    className="form-check-input"
                    checked={props.agreement}
                    onChange={props.handleAggrement}
                />
                <label className="form-check-label" htmlFor="agreement">
                    Term and Condition
                </label>
            </div>
            <div>
                <button
                    onClick={props.handleSubmit}
                    type="button"
                    className="btn btn-outline-success"
                    disabled={!props.agreement}
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default Form;
