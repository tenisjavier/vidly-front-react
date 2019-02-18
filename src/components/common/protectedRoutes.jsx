import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({
    auth,
    path,
    component: Component,
    render,
    ...rest
}) => {
    console.log(auth._id);
    return (
        <Route
            {...rest}
            render={props => {
                if (!auth._id)
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    );
                return Component ? <Component {...props} /> : render(props);
            }}
        />
    );
};

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(ProtectedRoute);
