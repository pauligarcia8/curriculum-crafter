import Input from "./Input";
import classes from "./OneColumnBox.module.css";

const OneColumnBox = ({ title, description, label, name, onFieldChange }) => {
  
  return (
    <div className={classes.boxContainer}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Input
        textarea
        label={label}
        name={name}
        onChange={(e) => onFieldChange(name, e.target.value)}
      />
    </div>
  );
};

export default OneColumnBox;
