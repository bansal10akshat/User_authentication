import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";

class Success extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const user = this.props.location.state;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Success</b> The Details of your{" "}
              <span style={{ fontFamily: "monospace" }}>Profile</span> are
              Updated!
            </h4>
            <p className="flow-text grey-text text-darken-1">
              You can edit your additional details again or You can Logout! Your
              Current details are:-
              <br />
              Name:-{user.name} <br />
              Age:-{user.age} <br />
              Gender:-{user.gender} <br />
              Date of Birth:-{user.dob} <br />
              Mobile Number:-{user.mobile} <br />
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/dashboard"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Edit Again
              </Link>
            </div>
            <div className="col s6">
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Success.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Success);
