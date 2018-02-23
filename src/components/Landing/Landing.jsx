import React, { Component } from "react";
import "./Landing.scss";
import CountUp from "react-countup";
import profileImage from "../../../images/profileImage.jpg";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import Image from "react-bootstrap/lib/Image";
import Typed from "react-typed";
import Particles from "react-particles-js";

const homePageStyle = {
  "background-image": `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${profileImage})`,
  "background-size": "100%",
  "background-repeat": "no-repeat",
  "background-attachment": "fixed"
};

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCountNotComplete: true,
      userName: props.data ? props.data.name : "mate"
    };
  }

  onComplete = () => {
    this.setState({
      isCountNotComplete: false
    });
  };

  typedComponent() {
    return (
      <div className="typed">
        <h1>{`Hi ${this.state.userName} !`}</h1>
        <h1>I'm Niranjan...I design & build</h1>
        <h1>
          <Typed
            strings={[
              "landing pages.",
              "corporate websites.",
              "web applications.",
              "user interfaces.",
              "websites people love using!"
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h1>
      </div>
    );
  }
  render() {
    return (
      <div className="landing-page" style={homePageStyle}>
        <Particles
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 5
                }
              },
              interactivity: {
                events: { onhover: { enable: true, mode: "repulse" } }
              }
            }
          }}
          style={{
            width: "100%",
            position: "absolute"
          }}
        />
        <Grid fluid={true}>
          <Row>
            <Col lg={12} md={12} sm={12} className="typed-container">
              {this.state.isCountNotComplete && (
                <CountUp
                  className="count"
                  useEasing={true}
                  useGrouping={true}
                  start={0}
                  end={100}
                  duration={5}
                  useEasing={true}
                  useGrouping={true}
                  onComplete={this.onComplete}
                />
              )}
              {!this.state.isCountNotComplete && (
                <div>{this.typedComponent()}</div>
              )}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
