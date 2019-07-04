import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";
import { Provider } from "react-redux";
import { Container } from "reactstrap";
import store from "./store";
import { loadUser } from "./actions/authActions";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Footer from "./components/Footer";
import { Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <div className="content">
            <Switch>
              <Route path="/AboutUs" component={AboutUs} />
              <Route path="/Contact" component={Contact} />
              <Route path="/" exact component={Home} />
              <Route path="/Login" exact component={Login} />
              <Route path="/Logout" exact component={Logout} />
              <Redirect to="/not-found" />
            </Switch>
          </div>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
