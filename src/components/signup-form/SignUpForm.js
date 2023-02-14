import React, { Component } from "react";
import Form from "./Form";

const values = {
    name: "",
    email: "",
    password: "",
    birthDate: "",
    gender: "",
};

class SignUpForm extends Component {
    state = {
        values,
        agreement: false,
        errors: {},
    };

    handleChange = (e) => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { isValid, errors } = this.validate();

        if (isValid) {
            this.props.createUser(this.state.values);
            this.setState({ values, agreement: false, errors: {} });
        } else {
            console.log(errors);
            this.setState({ errors });
        }
    };

    handleAggrement = (e) => {
        this.setState({
            ...this.state.values,
            agreement: e.target.checked,
        });
    };

    validate = () => {
        const errors = {};
        const {
            values: { name, email, password, birthDate, gender },
        } = this.state;

        if (!name) errors.name = "Please Provide Your Name ";
        if (!email) errors.email = "Please Provide Your Email Address";
        if (!password) errors.password = "Please Provide Your Password";
        if (!birthDate) errors.birthDate = "Please Provide Birth Date";
        if (!gender) errors.gender = "Please Select Your Gender";

        return { errors, isValid: Object.keys(errors).length === 0 };
    };

    render() {
        return (
            <div>
                <Form
                    values={this.state.values}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    agreement={this.state.agreement}
                    handleAggrement={this.handleAggrement}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}

export default SignUpForm;
