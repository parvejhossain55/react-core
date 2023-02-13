import React, { Component } from "react";

class UncontrolledForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {};

        data.name = e.target.name.value;
        data.email = e.target.email.value;
        data.password = e.target.password.value;

        console.log(data);
        e.target.reset()
    };
    render() {
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

export default UncontrolledForm;
