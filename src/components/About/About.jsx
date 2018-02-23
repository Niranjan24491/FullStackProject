import React, { Component } from "react";
import "./About.scss";
import CountUp from "react-countup";
import profileImage from "../../../images/profileImage.jpg";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";
import Image from "react-bootstrap/lib/Image";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  drawInnerPolygon() {
    return (
      <div className="hexa-poly">
        <div className="hexa-poly1" />
      </div>
    );
  }
  drawPolygon(level) {
    return (
      <div className={"hexa-poly-container" + level}>
        {this.drawInnerPolygon()}
        {this.drawInnerPolygon()}
        {this.drawInnerPolygon()}
        {this.drawInnerPolygon()}
        {this.drawInnerPolygon()}
      </div>
    );
  }
  render() {
    return (
      <div className="about-page">
        <Grid fluid={true}>
          <Row>
            <Col lg={5} md={5} sm={12} />
            <Col lg={7} md={7} sm={12} className="polygons">
              {this.drawPolygon()}
              {this.drawPolygon(1)}
              {this.drawPolygon()}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
