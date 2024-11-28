import Input from "../ui/Input";
import classes from "./Skills.module.css";

const Skills = () => {
    return (
        <div className={classes.boxContainer}>
            <h2>Skills</h2>
            <div className={classes.inputContainer}>
                <div className={classes.column}>
                    <Input />
                    <button className={classes.button}>Add +</button>
                </div>
                <div className={classes.column}>
                    <p>Botones con skills</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;