import { useContext, useState } from "react";
import { FormContext } from "../store/user-form-context";
import Input from "../ui/Input";
import classes from "./Skills.module.css";
import { colors } from "../utils/btnColors";

const Skills = () => {
  const { cvFormData, handleFieldChange } = useContext(FormContext);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      const updatedSkills = [...cvFormData.skills, newSkill];
      handleFieldChange("skills", null, updatedSkills);
      setNewSkill("");
    }
  };

  const handleDeleteSkill = (skillToRemove) => {
    const updatedSkills = cvFormData.skills.filter((skill) => skill !== skillToRemove);
    handleFieldChange("skills", null, updatedSkills);
  }

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
            {cvFormData.skills.map((skill, index) => (
                <button key={skill} className={classes.btnSkills} style={{
                  backgroundColor: colors[index % colors.length], 
                  color: "#fff", 
                }} onClick={() => handleDeleteSkill(skill)}>{skill}
                </button>
            ))
            }
        </div>
      </div>
    </div>
  );
};

export default Skills;
