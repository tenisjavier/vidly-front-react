import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import loginLinks from "../auth/loginLinks";
import logoutLinks from "../auth/logoutLinks";

const Header = ({ auth }) => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>
                    Home
                </NavLink>
            </li>
            {auth._id && loginLinks()}
            {!auth._id && logoutLinks()}
        </ul>
    );
};

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(Header);
