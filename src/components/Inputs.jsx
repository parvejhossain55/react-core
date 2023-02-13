import React, { Component } from "react";

class Inputs extends Component {
    state = {
        name: "",
        country: "",
        about: "",
        birthDate: "",
        gender: "",
        agree: false,
        skills: [],
    };

    handleChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleChecked = (e) => {
        this.setState({
            agree: e.target.checked,
        });
    };

    handleSkillChange = (e) => {
        if (e.target.checked) {
            this.setState({
                skills: [...this.state.skills, e.target.value],
            });
        } else {
            const skills = this.state.skills.filter(
                (skill) => skill !== e.target.value
            );
            this.setState({ skills });
        }
    };

    render() {
        const { name, country, about, birthDate, agree, skills } = this.state;

        return (
            <div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        placeholder="Enter Your Name"
                        onChange={this.handleChanges}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                        Country
                    </label>
                    <select
                        className="form-select"
                        name="country"
                        value={country}
                        onChange={this.handleChanges}
                    >
                        <option>Select one</option>
                        <option value="india">India</option>
                        <option value="bhutan">Bhutan</option>
                        <option value="pakistan">Pakistan</option>
                        <option value="malwaysia">Malayasia</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="about" className="form-label">
                        About
                    </label>
                    <textarea
                        className="form-control"
                        name="about"
                        rows="3"
                        value={about}
                        onChange={this.handleChanges}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Birth Date
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        name="birthDate"
                        value={birthDate}
                        onChange={this.handleChanges}
                    />
                </div>
                <div>
                    <label className="form-label">Gender</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        onChange={this.handleChanges}
                    />
                    <label className="form-check-label" htmlFor="male">
                        Male
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        onChange={this.handleChanges}
                    />
                    <label className="form-check-label" htmlFor="female">
                        Female
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="other"
                        value="other"
                        onChange={this.handleChanges}
                    />
                    <label className="form-check-label" htmlFor="other">
                        Other
                    </label>
                </div>
                <div className="mt-3">
                    <div className="form-check form-check-inline">
                        <input
                            name="skills"
                            className="form-check-input"
                            type="checkbox"
                            id="java"
                            value="java"
                            checked={skills.includes("java")}
                            onChange={this.handleSkillChange}
                        />
                        <label className="form-check-label" htmlFor="java">
                            Java
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            name="skills"
                            className="form-check-input"
                            type="checkbox"
                            id="python"
                            value="python"
                            checked={skills.includes("python")}
                            onChange={this.handleSkillChange}
                        />
                        <label className="form-check-label" htmlFor="python">
                            Python
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            name="skills"
                            className="form-check-input"
                            type="checkbox"
                            id="php"
                            value="php"
                            checked={skills.includes("php")}
                            onChange={this.handleSkillChange}
                        />
                        <label className="form-check-label" htmlFor="php">
                            PHP
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            name="skills"
                            className="form-check-input"
                            type="checkbox"
                            id="ruby"
                            value="ruby"
                            checked={skills.includes("ruby")}
                            onChange={this.handleSkillChange}
                        />
                        <label className="form-check-label" htmlFor="ruby">
                            Ruby
                        </label>
                    </div>
                </div>
                <div className="form-check mt-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="agree"
                        id="agree"
                        checked={agree}
                        onChange={this.handleChecked}
                    />
                    <label className="form-check-label" htmlFor="agree">
                        Term and Condition
                    </label>
                </div>
                <div className="mt-3">
                    <button
                        onClick={() => console.log(this.state)}
                        className="btn btn-success"
                    >
                        Show Data
                    </button>
                </div>
            </div>
        );
    }
}

export default Inputs;
