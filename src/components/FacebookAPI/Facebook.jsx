import React, { Component } from "react";
import "./Facebook.scss";

export default class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FbUserProfileData: {}
    };
  }
  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId: "929134127135304",
        cookie: true, // enable cookies to allow the server to access
        // the session
        xfbml: true, // parse social plugins on this page
        version: "v2.1" // use version 2.1
      });
    }.bind(this);

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=929134127135304&autoLogAppEvents=1";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    this.props.onClick(FB.login(this.checkLoginState()));
  }

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  testAPI = () => {
    console.log("Welcome!  Fetching your information.... ");
    FB.api(
      "/me",
      {
        locale: "tr_TR",
        fields: "name, email, picture, cover"
      },
      function(response) {
        this.setState({
          FbUserProfileData: response
        });
        console.log("Successful login for: " + { response });
        return response;
      }
    );
  };

  // This is called with the results from from FB.getLoginStatus().
  statusChangeCallback = response => {
    console.log("statusChangeCallback");
    console.log(response);
    if (response.status === "connected") {
      // Logged into your app and Facebook.
      return this.testAPI();
    } else if (response.status === "not_authorized") {
      // The person is logged into Facebook, but not your app.
      alert("Please log " + "into this app.");
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      alert("Please log " + "into facebook.");
    }
  };

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  checkLoginState = () => {
    FB.getLoginStatus(
      function(response) {
        return this.statusChangeCallback(response);
      }.bind(this)
    );
  };

  fbClick = () => {
    return (data = FB.login(this.checkLoginState()));
  };

  render() {
    return (
      <div className="login-page">
        <a href="#">
          <div className="facebook-button">
            <i class="fa fa-facebook" />
          </div>
        </a>
      </div>
    );
  }
}
