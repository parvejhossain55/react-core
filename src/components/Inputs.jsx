import React, { Component } from "react";

class Inputs extends Component {
    state = {
        name: "",
        country: "",
        about: "",
        birthDay: "",
    };

    render() {
        return (
            <div>
                <form>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            name="name"
                            placeholder="Enter Your Name"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="country" class="form-label">
                            Country
                        </label>
                        <select
                            class="form-select"
                            name="country"
                        >
                            <option selected>Select one</option>
                            <option value="india">India</option>
                            <option value="bhutan">Bhutan</option>
                            <option value="pakistan">Pakistan</option>
                            <option value="malwaysia">Malayasia</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="about" class="form-label">
                            About
                        </label>
                        <textarea
                            class="form-control"
                            name="about"
                            id="about"
                            rows="3"
                            placeholder="Tell me about yourself"
                        ></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Birth Date
                        </label>
                        <input
                            type="date"
                            class="form-control"
                            name="birthDate"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Inputs;
