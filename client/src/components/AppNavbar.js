import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/img/logo/1.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "./../actions/authActions";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      // <Fragment>
      //   <NavItem>
      //     <span className="navbar-text mr-3">
      //       <strong>{user ? `Welcome ${user.name}` : ""}</strong>
      //     </span>
      //   </NavItem>
      //   <NavItem>
      //     <Logout />
      //   </NavItem>
      // </Fragment>
      <nav>
        <ul>
          <li class="move_left">
            <Link to="/">Home</Link>
          </li>
          <li class="move_left">
            <Link to="AboutUs">About Us</Link>
          </li>
          <li class="move_left">
            <Link to="Contact">Contact</Link>
          </li>
          <li class="move_right">
            <span>
              <strong>{user ? `Welcome ${user.name}` : ""}</strong>
            </span>
          </li>
          <li class="move_right">
            <Link to="Logout">Logout</Link>
          </li>
        </ul>
      </nav>
    );

    const guestLinks = (
      <nav>
        <ul>
          <li class="move_left">
            <Link to="/">Home</Link>
          </li>
          <li class="move_left">
            <Link to="AboutUs">About Us</Link>
          </li>
          <li class="move_left">
            <Link to="Contact">Contact</Link>
          </li>
          <li class="move_right">
            <Link to="Login">Login</Link>
          </li>
        </ul>
      </nav>
    );
    return (
      // <div>
      //   <Navbar color="dark" expand="sm" class="mb-5">
      //     <Container>
      //       <NavbarToggler onClick={this.toggle} />
      //       <Collapse isOpen={this.state.isOpen} navbar>
      //         <Nav className="ml-auto" navbar>
      //           {isAuthenticated ? authLinks : guestLinks}
      //         </Nav>
      //       </Collapse>
      //     </Container>
      //   </Navbar>
      // </div>
      <div>
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
              <div class=" col-lg-10 col-md-8 col-xs-7">
                <div class="main-menu">
                  {isAuthenticated ? authLinks : guestLinks}
                </div>
              </div>

              <div class="col-xs-12">
                <div class="mobile-menu" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  null
)(AppNavbar);
