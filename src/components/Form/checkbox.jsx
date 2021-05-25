const RememberMe = ({ input, label, meta }) => {
  return (
    <div className="col-12 form-check mt-2 ">
      <input
        className={"form-check-input"}
        {...input}
        id="flexCheckDefault"
        type={"checkbox"}
        value
      />
      <label id={"flexCheckDefault"} htmlFor="RememberMe">
        {label}
      </label>
    </div>
  );
};
export default RememberMe;
