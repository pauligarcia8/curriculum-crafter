import { useContext, useState } from "react";
import { FormContext } from "../store/user-form-context";
import Input from "../ui/Input";
import classes from "./Skills.module.css";

const Skills = () => {
  const { cvFormData, handleFieldChange } = useContext(FormContext);
  const [newSkill, setNewSkill] = useState("");
  console.log("data ->", cvFormData);

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      const updatedSkills = [...cvFormData.skills, newSkill];
      handleFieldChange("skills", null, updatedSkills);
      setNewSkill("");
    }
  };

  return (
    <div className={classes.boxContainer}>
      <h2>Skills</h2>
      <div className={classes.inputContainer}>
        <div className={classes.column}>
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter a skill"
          />
          <button className={classes.btnAdd} onClick={handleAddSkill}>
            Add +
          </button>
        </div>
        <div className={classes.buttonColumn}>
            {cvFormData.skills.map((skill) => (
                <button className={classes.btnSkills}>{skill}</button>
            ))
            }
        </div>
      </div>
    </div>
  );
};

export default Skills;
