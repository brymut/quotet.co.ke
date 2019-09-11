export const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "A name is required";
  }

  if (!values.email) {
    errors.anthem = "An email address is required";
  }

  if (!values.message) {
    errors.dreamdate =
      "Please provide information about what you would like help with";
  }

  return errors;
};
