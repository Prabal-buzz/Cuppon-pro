export default {
  emailValidator: (value) => {
    if (!value) {
      return "This field is required";
    }
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return "Invalid email address";
    }
    return undefined;
  },
  emptyValidator: (value) => (value ? undefined : "This field is required"),
  confirmValidator: (value, confirm, confirmWith) => {
    if (value === undefined) {
      return "This field is required";
    }
    return value !== undefined && confirm !== "" && value === confirm
      ? undefined
      : `Make sure this field matches with ${confirmWith}`;
  },
  integerValidator: (value) =>
    /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/.test(value)
      ? undefined
      : "Only integers are accepted",
};
