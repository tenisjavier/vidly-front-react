import React from "react";
import { NavLink } from "react-router-dom";

const loginLinks = () => {
    return (
        <React.Fragment>
            <li className="nav-item">
                <NavLink className="nav-link" to={"/register"}>
                    Register
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to={"/login"}>
                    Login
                </NavLink>
            </li>
        </React.Fragment>
    );
};

export default loginLinks;
