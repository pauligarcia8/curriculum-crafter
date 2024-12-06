import classes from "./AddRemoveButtons.module.css";
import addIcon from "../assets/plus-circle-svgrepo-com.svg";
import removeIcon from "../assets/minus-circle-svgrepo-com.svg";

const AddRemoveButtons = ({section, index, addSection, removeSection}) => {

    return (
        <div className={classes.buttonsContainer}>
          <button className={classes.button} onClick={() => addSection(section)}><img className={classes.icon} src={addIcon} width="20"/></button>
          <button className={classes.button} onClick={() => removeSection(section, index)}><img className={classes.icon} src={removeIcon} width="20"/></button>
        </div>
    )
}

export default AddRemoveButtons;