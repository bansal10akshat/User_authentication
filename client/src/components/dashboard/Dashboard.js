import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { UpdateUser } from "../../actions/authActions";
import classnames from "classnames";
import M from "materialize-css";
import "react-phone-number-input/style.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      age: "",
      gender: "",
      dob: "",
      mobile: "",
      errors: {},
    };
    this.onValueChange = this.onValueChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
      gender: event.target.value,
    });
    console.log(this.state.selectedOption);
  }
  onDateChange = (val) => {
    val = val.toString();
    var date_array = val.split(" ");
    var date =
      date_array[0] +
      " " +
      date_array[1] +
      " " +
      date_array[2] +
      " " +
      date_array[3];
    this.setState({ dob: date });
    console.log(val, typeof val);
  };
  onMobileChange = (value) => {
    this.setState({ mobile: value });
    console.log(this.state.mobile);
  };
  onUpdateClick = (e) => {
    e.preventDefault();
    const UpdatedUser = {
      id: this.props.auth.user.id,
      name: this.props.auth.user.name,
      age: this.state.age,
      gender: this.state.gender,
      dob: this.state.dob,
      mobile: this.state.mobile,
    };
    console.log(UpdatedUser);
    this.props.UpdateUser(UpdatedUser, this.props.history);
  };
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount() {
    var context = this;
    var options = {
      defaultDate: new Date(),
      setDefaultDate: true,
      onSelect: function(date) {
        context.onDateChange(date);
        // Selected date is logged
      },
      yearRange: 100,
      maxDate: new Date(),
    };
    var elems = document.querySelector(".datepicker");
    var instance = M.Datepicker.init(elems, options);
    // instance.open();
    instance.setDate(new Date());
  }
  render() {
    const { user } = this.props.auth;
    const { errors } = this.state;
    console.log(errors);
    console.log(this.props);
    return (
      <div style={{ height: "100vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name}
              <p className="flow-text grey-text text-darken-1">
                Please Fill Some{" "}
                <span style={{ fontFamily: "monospace" }}>Additional</span>{" "}
                Details 👏
              </p>
            </h4>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <form>
              <div className="input-field col s12">
                <label htmlFor="age">Age</label>
                <input
                  onChange={this.onChange}
                  value={this.state.age}
                  error={errors.age}
                  id="age"
                  type="number"
                  className={classnames("", {
                    invalid: errors.age,
                  })}
                />
                <span className="red-text">{errors.age}</span>
              </div>
              <div className="input-field col s16">
                <p>
                  <label>
                    <input
                      name="Male"
                      type="radio"
                      id="gender"
                      value="Male"
                      checked={this.state.selectedOption === "Male"}
                      onChange={this.onValueChange}
                    />
                    <span>Male</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      name="Female"
                      type="radio"
                      value="Female"
                      checked={this.state.selectedOption === "Female"}
                      onChange={this.onValueChange}
                    />
                    <span>Female</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      class="with-gap"
                      name="Others"
                      type="radio"
                      value="Others"
                      checked={this.state.selectedOption === "Others"}
                      onChange={this.onValueChange}
                    />
                    <span>Others</span>
                  </label>
                </p>
                <span className="red-text">{errors.gender}</span>
              </div>
              <div className="input-field col s12">
                <input type="text" class="datepicker" />
                <span className="red-text">{errors.dob}</span>
              </div>
              <div className="input-field col s16">
                <label htmlFor="mobile">Mobile No.(10 digits)</label>
                <input
                  id="mobile"
                  type="number"
                  error={errors.mobile}
                  value={this.state.mobile}
                  onChange={this.onChange}
                />
                <span className="red-text">{errors.mobile}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  onClick={this.onUpdateClick}
                >
                  Update
                </button>
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  UpdateUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { logoutUser, UpdateUser })(Dashboard);
