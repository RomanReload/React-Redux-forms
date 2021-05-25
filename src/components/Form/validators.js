const validate = (values) => {
    const error = {};
    //   console.log(values);
    if (!values.username) {
        error.username = "Required";
        error.button = "Required";
    } else if (values.username.length < 2) {
        error.username = "Minimum be 2 characters or more";
        error.button = "user name wrong!";
    }
    if (!values.password) {
        error.password = "Password required";
        error.button = "Required";
    } else if (values.password.length <= 2) {
        error.password = "Password length shoud be more than 2 characters";
        error.button = "password is wrong!";
    }
    return error;
};

export default validate;