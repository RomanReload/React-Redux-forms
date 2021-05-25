import { Field, reduxForm } from "redux-form";
import renderField from "./RenderField";
import { ButtonRender } from "./RenderField";
import RememberMe from "./checkbox";
import "../../bootstrap.css";
import validate from "./validators";

const FormLogin = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="username"
        type="text"
        placeholder={"Write your Name"}
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        placeholder={"Write your Password"}
        component={renderField}
        label="Password"
      />

      <Field
        type={"checkbox"}
        name={"checkbox"}
        label={"Remember me"}
        component={RememberMe}
      />

      <Field label={"Create"} name={"button"} component={ButtonRender} />
    </form>
  );
};

const ReduxLoginForm = reduxForm({
  form: "login",
  validate,
})(FormLogin);

const LoginBlock = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="row m-3 p-2">
      <div className="col-12 shadow-sm p-2">
        <h1>Create Account</h1>
        <ReduxLoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default LoginBlock;
