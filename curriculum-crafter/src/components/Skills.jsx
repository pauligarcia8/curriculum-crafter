import { useContext, useState } from "react";
import { FormContext } from "../store/user-form-context";
import Input from "../ui/Input";
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
    const updatedSkills = cvFormData.skills.filter(
      (skill) => skill !== skillToRemove
    );
    handleFieldChange("skills", null, updatedSkills);
  };

  return (
    <div className="text-left leading-8">
      <h2 className="mt-2.5">Skills</h2>
      <div className="flex items-start justify-between gap-5">
        <div className="flex flex-1 flex-col max-h-[500px]">
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter a skill"
          />
          <button
            className="text-white mt-4 h-8 w-20 rounded-lg cursor-pointer font-light bg-sky-700 hover:bg-sky-600 focus:bg-sky-800"
            onClick={handleAddSkill}
          >
            Add +
          </button>
        </div>
        <div className="flex flex-1 flex-wrap gap-1.5 max-h-[500px] overflow-y-auto">
          {cvFormData.skills.map((skill, index) => (
            <button
              key={skill}
              className="py-0.5 px-2 font-medium border-none rounded-lg cursor-pointer text-center whitespace-nowrap"
              style={{
                color: colors[index % colors.length],
              }}
              onClick={() => handleDeleteSkill(skill)}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
