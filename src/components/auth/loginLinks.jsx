import React from "react";
import { NavLink } from "react-router-dom";

const loginLinks = () => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={"/logout"}>
                Logout
            </NavLink>
        </li>
    );
};

export default loginLinks;
