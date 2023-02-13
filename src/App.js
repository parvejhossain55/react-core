import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Inputs from "./components/Inputs";

const App = () => (
    <div class="container" >
        <div class="row justify-content-center">
            <div class="col-8 mt-4">
                <div class="card">
                    <div class="card-header">
                        <h2>Practice React Input Element</h2>
                    </div>
                    <div class="card-body">
                        <Inputs />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default App;
