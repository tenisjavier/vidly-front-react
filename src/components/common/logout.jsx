import { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";

class Logout extends Component {
    componentDidMount() {
        this.props.logout();
        window.location = "/";
    }

    render() {
        return null;
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout())
    };
}

export default connect(
    null,
    mapDispatchToProps
)(Logout);
