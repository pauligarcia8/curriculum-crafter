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
    <div className="flex-[2] max-h-[calc(100vh-182px)] shadow-md scrollbar-thin overflow-y-auto bg-white text-black p-2.5 my-0 mx-2.5 rounded-2xl">
      <PersonalDetails />
      <WorkExperience />
      <Education />
      <Skills />
    </div>
  );
};

export default CvForm;
