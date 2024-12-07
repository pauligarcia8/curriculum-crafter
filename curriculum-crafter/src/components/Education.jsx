import { useContext } from "react";
import { FormContext } from "../store/user-form-context";
import TwoColumnBox from "../ui/TwoColumnBox";
import OneColumnBox from "../ui/OneColumnBox";
import AddRemoveButtons from "../ui/addRemoveButtons";
const experienceInputConfig = [
  { name: "institution", label: "Institution", type: "text", column: 1 },
  { name: "startDate", label: "From", type: "date", column: 1 },
  { name: "degree", label: "Degree", type: "text", column: 2 },
  { name: "endDate", label: "To", type: "date", column: 2 },
];

const Education = () => {
  const section = "education";
  const { cvFormData, handleFieldChange, addSection, removeSection } =
    useContext(FormContext);

  return (
    <>
      {cvFormData.education.map((education, index) => (
        <div key={education.id}>
          <TwoColumnBox
            title={`Education #${index + 1}`}
            inputConfig={experienceInputConfig}
            description="Studies and certifications"
            onFieldChange={(key, value) => {
              handleFieldChange(section, key, value, index);
            }}
          />
          <OneColumnBox
            label="Write down what you did and achieved in your daily tasks in 4 to 6 lines, followed by 2 or more key achievements where possible."
            name="description"
            onFieldChange={(key, value) => {
              handleFieldChange(section, key, value, index);
            }}
          />
          <AddRemoveButtons
            section={section}
            index={index}
            addSection={addSection}
            removeSection={removeSection}
          />
        </div>
      ))}
    </>
  );
};

export default Education;
