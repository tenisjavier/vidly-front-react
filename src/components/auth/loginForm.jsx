import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Joi from "joi-browser";
import Form from "../common/form";
import { login, getCurrentUser } from "../../store/actions/authActions";

class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await this.props.login(data.username, data.password);
            window.location = "/";
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
        if (this.props.auth._id) return <Redirect to="/" />;

        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => dispatch(login(username, password)),
        getCurrentUser: () => dispatch(getCurrentUser())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
