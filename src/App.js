import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import Inputs from "./components/InputElemets";
// import UncontrolledForm from "./components/UncontrollForm";
// import ControlledForm from "./components/ControlledForm";
// import SplitForm from './components/split-form/SplitForm';
import SignUpForm from "./components/signup-form/SignUpForm.js";

const App = () => {
    const [users, setUser] = useState([]);

    const createUser = (user) => {
        user.id = Date.toString();
        setUser([...users, user]);
    };

    console.log(users)

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8 mt-4">
                    <div className="card">
                        <div className="card-header">
                            <h2>Practice React Input Element</h2>
                        </div>
                        <div className="card-body">
                            {/* <Inputs /> */}
                            {/* <UncontrolledForm /> */}
                            {/* <ControlledForm/> */}
                            {/* <SplitForm/> */}
                            <SignUpForm createUser={createUser} />
                        </div>
                        {users.length > 0 && (
                            <div className="card-body">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">User List</h4>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        {users.map((user) => (
                                            <li key={user.id} className="list-group-item">{`${user.name} -> ${user.email}`}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
