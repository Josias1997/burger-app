import React, { Component } from 'react';
import { connect } from 'react-redux';
import {logOut} from "../../../store/actions/";
import {Redirect} from "react-router";

class Logout extends Component {
    componentDidMount() {
        this.props.onLogout();
    }

    render () {
        return <Redirect to={"/"}/>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logOut())
    };
};

export default connect(null, mapDispatchToProps)(Logout);