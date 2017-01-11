import Validator from "../validator";

Validator.defineLocale("en", {
  defaultMessage: "This field value is invalid",
  truthy: "This field is must be truthy value",
  falsy: "This field is must be falsy value",
  string: "This field is must be a string",
  number: "This field is must be a number",
  integer: "This field is must be integer",
  float: "This field is must be float",
  numeric: "This field is must be a number",
  required: "This field is required",
  alpha: "This field may only contain letters",
  alphaDash: "This field may only contain letters, numbers, and dasheds",
  alphaNum: "This field may only contain letters, and numbers",
  date: "This field is not a valid date",
  dateFormat: "This field does not match the format {{format}}",
  length: "This field must be between {{min}} and {{max}} characters",
  minLength: "This field must be at least {{min}} characters",
  maxLength: "This field may not be greater than {{max}} characters",
  range: "This field must be between {{min}} and {{max}}",
  min: "This field must be at least {{min}}",
  max: "This field may not be greater than {{max}}",
  url: "This field format is invalid",
  email: "This field must be a valid email address",
  regex: "This field format is invalid",
  same: "Field value do not match",
  different: "This field value is invalid",
  in: "This field value is invalid",
  notIn: "This field value is invalid"
});