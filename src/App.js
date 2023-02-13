import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Inputs from "./components/Inputs";

const App = () => (
    <div className="container" >
        <div className="row justify-content-center">
            <div className="col-8 mt-4">
                <div className="card">
                    <div className="card-header">
                        <h2>Practice React Input Element</h2>
                    </div>
                    <div className="card-body">
                        <Inputs />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default App;
