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

        console.log({ ...this.state.values, agreement: this.state.agreement });

        this.setState({ values, agreement: false });
    };

    handleAggrement = (e) => {
        this.setState({
            ...this.state.values,
            agreement: e.target.checked,
        });
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
                />
            </div>
        );
    }
}

export default SignUpForm;
