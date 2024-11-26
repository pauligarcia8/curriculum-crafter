import { useContext } from "react";
import { FormContext } from "../store/user-form-context";
import OneColumnBox from "../ui/OneColumnBox";
import ThreeInputBox from "../ui/ThreeInputBox";
import TwoColumnBox from "../ui/TwoColumnBox";

const CvForm = () => {
  const { cvFormData, handleFieldChange } = useContext(FormContext);
  console.log("DATA:", cvFormData);

  return (
    <div className="form-container">
      <TwoColumnBox
        title="Personal Details"
        section="personalInfo"
        onFieldChange={(key, value) =>
          handleFieldChange("personalInfo", key, value)
        }
      />
      <OneColumnBox
        title="Personal Profile"
        label="Short paragraph at the top of your CV, in which you summarize your relevant experience and skills in 4 to 6 lines."
        name="profile"
        section="personalInfo"
        onFieldChange={(key, value) =>
          handleFieldChange("personalInfo", key, value)
        }
      />
      <ThreeInputBox
        title="Work Experience"
        label="Write down what you did and achieved in your daily tasks in 4 to 6 lines, followed by 2 or more key achievements where possible."
        type="date"
        section="workExperience"
        index={0}
        onFieldChange={handleFieldChange}
      />
      <ThreeInputBox
        title="Education"
        label="Studies and certifications"
        type="date"
        section="education"
        index={0}
        onFieldChange={handleFieldChange}
      />
    </div>
  );
};

export default CvForm;
