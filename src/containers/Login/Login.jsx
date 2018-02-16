import React, { Component } from "react";
import "./Login.scss";
import bgm from "../../../images/bg4.jpg";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import Facebook from "../../components/FacebookAPI/Facebook";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FbUserProfileData: props.FbUserProfileData
    };
  }

  fbClick = data => {
    console.log(data);
  };

  render() {
    return (
      <div className="login-page">
        <Facebook onClick={e => this.fbClick()} />
      </div>
    );
  }
}
