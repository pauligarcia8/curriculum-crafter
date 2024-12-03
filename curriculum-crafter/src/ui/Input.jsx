import classes from "./Input.module.css";

const Input = ({ label, name, textarea, className, ...props }) => {
  const InputComponent = textarea ? "textarea" : "input";

  return (
    <>
      {label && <label htmlFor={name} className={classes.label}>
        {label}
      </label>}
      <InputComponent
        id={name}
        maxLength="150"
        name={name}
        className={`${classes.input} ${className || ""}`}
        {...props}
      />
    </>
  );
};

export default Input;
