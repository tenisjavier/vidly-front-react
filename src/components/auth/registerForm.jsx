import React from "react";
import { connect } from "react-redux";
import Joi from "joi-browser";
import Form from "../common/form";
import { createUser } from "../../store/actions/authActions";

class RegisterForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .email()
            .label("Username"),
        password: Joi.string()
            .required()
            .min(5)
            .label("Password"),
        name: Joi.string()
            .required()
            .label("Name")
    };

    doSubmit = async () => {
        try {
            await this.props.createUser(this.state.data);
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
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createUser: user => dispatch(createUser(user))
    };
}

export default connect(
    null,
    mapDispatchToProps
)(RegisterForm);
