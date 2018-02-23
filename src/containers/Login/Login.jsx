import React, { Component } from "react";
import "./Login.scss";
import bgm from "../../../images/bg4.jpg";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import Image from "react-bootstrap/lib/Image";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { Animated } from "react-animated-css";
import Home from "../Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const loginPageStyle = {
  "background-image": `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${bgm})`
};

const googleStyle = {
  display: "inline-block",
  background: "rgb(209, 72, 54)",
  color: "rgb(255, 255, 255)",
  width: "97px",
  "padding-top": "10px",
  "padding-bottom": "10px",
  "border-radius": "2px",
  border: "1px solid transparent",
  "font-size": "16px",
  "font-weight": "bold",
  "font-family": "Roboto"
};
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FbUserProfileData: props.FbUserProfileData,
      isFBCLicked: false,
      homePath: "../Home/Home"
    };
  }
  responseFacebook = response => {
    if (this.state.isFBCLicked && response.name) {
      this.setState({
        FbUserProfileData: response,
        redirect: true
      });
    }
  };
  componentClicked = data => {
    this.setState({
      isFBCLicked: true
    });
    console.log(data);
  };
  responseGoogle = response => {
    console.log(response);
  };

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: this.state.homePath,
            data: this.state.FbUserProfileData
          }}
        />
      );
    }
    return (
      <div className="login-page" style={loginPageStyle}>
        <Grid fluid={true}>
          <Row>
            <Col lg={6} md={6} sm={6}>
              <Animated
                animationIn="bounceInDown"
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay="2.5"
              >
                <FacebookLogin
                  appId="929134127135304"
                  autoLoad={true}
                  fields="name,email,picture"
                  onClick={e => this.componentClicked()}
                  callback={this.responseFacebook}
                  icon="fa fa-facebook"
                  textButton=""
                />
              </Animated>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <Animated
                animationIn="bounceInDown"
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay="2.8"
              >
                <GoogleLogin
                  clientId="134248182441-vuepppk5chqtkl0p16a9v12d0s5trhrj.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  style={googleStyle}
                >
                  <i class="fa fa-google" />
                </GoogleLogin>
              </Animated>
            </Col>
          </Row>
          <Row>
            <Col lg={1} md={1} sm={12} />
            <Col lg={11} md={11} sm={12}>
              <Animated
                animationIn="fadeInLeft"
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay="1"
              >
                <h1>Hi ...</h1>
              </Animated>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={12} />
            <Col lg={9} md={9} sm={12}>
              <Animated
                animationIn="fadeInLeft"
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay="2"
              >
                <h3>Login to know more about me</h3>
              </Animated>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
