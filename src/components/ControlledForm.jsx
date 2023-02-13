import React, { Component } from "react";

class ControlledForm extends Component {
    state = {
        name: "",
        email: "",
        password: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);

        this.setState({
            name: "",
            email: "",
            password: "",
        });
    };
    render() {
        const { name, email, password } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label mr-3">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="form-controll"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label mr-3">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            className="form-controll"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label mr-3">
                            Password
                        </label>
                        <input
                            type="text"
                            name="password"
                            className="form-controll"
                            value={password}
                            onChange={this.handleChange}
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
    }
}

export default ControlledForm;
