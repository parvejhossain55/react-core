import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import Inputs from "./components/InputElemets";
// import UncontrolledForm from "./components/UncontrollForm";
// import ControlledForm from "./components/ControlledForm";
// import SplitForm from './components/split-form/SplitForm';
import SignUpForm from './components/signup-form/SignUpForm.js';

const App = () => (
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
                        <SignUpForm/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default App;
