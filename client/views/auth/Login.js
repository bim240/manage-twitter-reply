import React from "react";
import { FaTwitter } from "react-icons/fa";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className="bg_login ">
          <div className="login_container" style={{ height: "100vh" }}>
            {this.props.error ? alert(this.props.error) : ""}

            <div className="login_section">
              <h5 className="title">Sign In</h5>
              <div className="login_image_section">
                <img
                  src="/images/twitter.svg"
                  className="responsive_img"
                  alt="login "
                />
              </div>
              <button className="login_btn">
                <a
                  href="/api/v1/users/auth/twitter"
                  className="btn_twitter"
                  type="primary">
                  <FaTwitter className="twitter_icon" />
                  Sign in with twitter
                </a>
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
