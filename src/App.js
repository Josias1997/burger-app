import React, {Component} from 'react';
import {connect} from "react-redux";
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import {authCheckState} from "./store/actions";

class App extends Component {
    componentDidMount() {
        this.props.onTryAutoSignUp();
    }

    render() {
        let routes = (<Switch>
            <Route path={"/auth"} component={Auth}/>
            <Route path={"/"} exact component={BurgerBuilder}/>
            <Redirect to={"/"}/>
        </Switch>);
        if (this.props.isAuthenticated) {
            routes = <Switch>
                <Route path={"/checkout"} component={Checkout}/>
                <Route path={"/orders"} component={Orders}/>
                <Route path={"/logout"} component={Logout}/>
                <Route path={"/auth"} component={Auth} />
                <Route path={"/"} exact component={BurgerBuilder}/>
            </Switch>
        }
        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(authCheckState())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
