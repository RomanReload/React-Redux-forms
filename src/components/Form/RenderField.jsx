const renderField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div className="col-12">
      <label>{label}</label>
      <div>
        <input
          className={`form-control 
          ${touched && error ? "is-invalid" : null}
          ${touched && !error ? "is-valid" : null}
          `}
          {...input}
          placeholder={placeholder}
          type={type}
        />
        {touched &&
          ((error && <span className="text-warning">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};
export const ButtonRender = ({ label, meta: { touched, error, warning } }) => {
  return (
    <div className="col-12">
      <button
        disabled={error === undefined || error === {} ? false : true}
        className={"btn btn-primary"}
      >
        {label}
      </button>
    </div>
  );
};

export default renderField;
