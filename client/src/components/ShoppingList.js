import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "./../actions/itemActions";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import logo from "./assets/img/logo/1.png";

import "./assets/css/bootstrap.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/flaticon.css";
import "./assets/css/ionicons.min.css";
import "./assets/css/headline.css";
import "./assets/css/animate.min.css";
import "./assets/css/material-design-iconic-font.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/Pe-icon-7-stroke.css";
import "./assets/css/bundle.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

class ShoppingList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };
  componentDidMount() {
    this.props.getItems();
  }
  onDeleteClick = id => {
    this.props.deleteItem(id);
  };
  render() {
    return (
      <header class="">
        <div class="header-top-area blue-bg">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-3 site-branding col-xs-12">
                <Link to="/" class="header-logo">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div class="col-lg-5 col-md-6 col-sm-9 hidden-xs">
                <div class="header-left">
                  <div class="header-text">
                    <div class="header-icon">
                      <i class="fa fa-phone" />
                      <i class="paint-roller" />
                    </div>
                    <div class="header-info">
                      <span class="phone">+00-1202-235</span>
                      <span class="gmail">hmend@gmail.com</span>
                    </div>
                  </div>
                  <div class="header-text">
                    <div class="header-icon">
                      <i class="fa fa-home" />
                    </div>
                    <div class="header-info">
                      <span class="phone">2020 Willshire Glen,</span>
                      <span class="gmail">Alpharetta,USA</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-3 hidden-sm col-xs-12">
                <div class="header-left-icon">
                  <a href="#">
                    <i class="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i class="fa fa-vimeo" />
                  </a>
                  <a href="#">
                    <i class="fa fa-tumblr" />
                  </a>
                  <a href="#">
                    <i class="fa fa-pinterest-p" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" class="main-menu-area gray-bg ">
          <div class="container">
            <div class="row">
              <div class=" col-lg-10 col-md-8  col-xs-7">
                <div class="main-menu">
                  <nav>
                    <ul>
                      <li class="active">
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="AboutUs">About Us</Link>
                      </li>
                      <li>
                        <Link to="Contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class=" col-lg-2 col-md-4 col-xs-12">
                <div class="make-appointment">
                  <img src="assets/img/logo/2.png" alt="" />
                  <a href="#">make appointment</a>
                </div>
              </div>
              <div class="col-xs-12">
                <div class="mobile-menu" />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
