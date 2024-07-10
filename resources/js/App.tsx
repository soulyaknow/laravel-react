import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/routes/Routes";

const App = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
};

export default App;
