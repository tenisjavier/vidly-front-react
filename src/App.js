import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Movies from "./components/movies/movies";
import MovieForm from "./components/movies/movieForm";
import LoginForm from "./components/auth/loginForm";
import Header from "./components/layout/header";
import Logout from "./components/common/logout";
import RegisterForm from "./components/auth/registerForm";
import ProtectedRoute from "./components/common/protectedRoutes";
import { getCurrentUser } from "./store/actions/authActions";
import "./App.css";
import "font-awesome/css/font-awesome.css";

class App extends Component {
    state = {
        dataReceived: false
    };
    async componentDidMount() {
        const existToken = localStorage.getItem("token") ? true : false;
        if (existToken) await this.props.getCurrentUser();
        this.setState({ dataReceived: true });
    }

    render() {
        if (!this.state.dataReceived) return null;
        return (
            <React.Fragment>
                <Header />
                <main className="container">
                    <Switch>
                        <Route exact path="/" component={Movies} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/login" component={LoginForm} />
                        <Route path="/register" component={RegisterForm} />
                        <ProtectedRoute
                            path="/movies/:id"
                            component={MovieForm}
                        />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCurrentUser: () => dispatch(getCurrentUser())
    };
}

// use withRouter for using connect with react-router-dom
export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(App)
);
