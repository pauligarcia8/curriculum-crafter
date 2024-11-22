import Input from "./Input";
import classes from './OneColumnBox.module.css';


const OneColumnBox = ({ title, description, label }) => {
  return (
    <div className={classes.boxContainer}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Input textarea label={label}/>
    </div>
  );
};

export default OneColumnBox;
