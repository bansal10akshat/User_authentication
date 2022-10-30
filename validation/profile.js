const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator function
  data.age = !isEmpty(data.age) ? data.age : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.dob = !isEmpty(data.dob) ? data.dob : "";
  data.mobile = !isEmpty(data.mobile) ? data.mobile : "";
  var ActualAge;
  if (!Validator.isEmpty(data.dob)) {
    var year = data.dob.split(" ")[3];
    var todayDate = new Date();
    var currYear = todayDate.toString().split(" ")[3];
    ActualAge = currYear - year;
    console.log(ActualAge);
  }
  // Name checks
  if (Validator.isEmpty(data.age)) {
    errors.age = "Age field is required";
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender field is required";
  }
  if (Validator.isEmpty(data.dob)) {
    errors.dob = "DOB field is required";
  } else if (ActualAge.toString() !== data.age) {
    errors.dob = "Age and Birth year doesn't match..Please check!!";
  }
  if (Validator.isEmpty(data.mobile)) {
    errors.mobile = "Mobile number field is required";
  }
  if (!Validator.isLength(data.mobile, { min: 10, max: 10 })) {
    errors.mobile = "Mobile must be of 10 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
