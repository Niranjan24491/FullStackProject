import React, { Component } from "react";
import "./Home.scss";
import Landing from "../../components/Landing/Landing";
import About from "../../components/About/About";

var smoothScroll = {
  timer: null,

  stop: function() {
    clearTimeout(this.timer);
  },

  scrollTo: function(id, callback) {
    var settings = {
      duration: 1000,
      easing: {
        outQuint: function(x, t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        }
      }
    };
    var percentage;
    var startTime;
    var node = document.getElementById(id);
    var nodeTop = node.offsetTop;
    var nodeHeight = node.offsetHeight;
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    var windowHeight = window.innerHeight;
    var offset = window.pageYOffset;
    var delta = nodeTop - offset;
    var bottomScrollableY = height - windowHeight;
    var targetY =
      bottomScrollableY < delta
        ? bottomScrollableY - (height - nodeTop - nodeHeight + offset)
        : delta;

    startTime = Date.now();
    percentage = 0;

    if (this.timer) {
      clearInterval(this.timer);
    }

    function step() {
      var yScroll;
      var elapsed = Date.now() - startTime;

      if (elapsed > settings.duration) {
        clearTimeout(this.timer);
      }

      percentage = elapsed / settings.duration;

      if (percentage > 1) {
        clearTimeout(this.timer);

        if (callback) {
          callback();
        }
      } else {
        yScroll = settings.easing.outQuint(
          0,
          elapsed,
          offset,
          targetY,
          settings.duration
        );
        window.scrollTo(0, yScroll);
        this.timer = setTimeout(step, 10);
      }
    }

    this.timer = setTimeout(step, 10);
  }
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePageClick = pageId => {
    smoothScroll.scrollTo(pageId);
  };

  render() {
    return (
      <div>
        <div className="button-list">
          <span className={this.state.active ? "span-active" : null} />
          <span className={this.state.active ? "span-active" : null} />
          <span className={this.state.active ? "span-active" : null} />
          <span className={this.state.active ? "span-active" : null} />
          <span className={this.state.active ? "span-active" : null} />
          <span className={this.state.active ? "span-active" : null} />
          <span className={this.state.active ? "span-active" : null} />
        </div>
        <div id="page1" onClick={e => this.handlePageClick("page1")}>
          <Landing data={this.props.location.data} />
        </div>
        <div id="page2" onClick={e => this.handlePageClick("page2")}>
          <About />
        </div>
      </div>
    );
  }
}
