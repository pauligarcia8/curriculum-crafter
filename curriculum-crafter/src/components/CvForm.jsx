import { useContext } from "react";
import { FormContext } from "../store/user-form-context";
import PersonalDetails from "./PersonalDetails";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";

const CvForm = () => {
  const { cvFormData, handleFieldChange } = useContext(FormContext);
  console.log("DATA:", cvFormData);

  return (
    <div className="form-container">
      <PersonalDetails />
      <WorkExperience />
      <Education />
      <Skills />
    </div>
  );
};

export default CvForm;
