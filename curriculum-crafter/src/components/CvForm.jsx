import OneColumnBox from "../ui/OneColumnBox";
import ThreeInputBox from "../ui/ThreeInputBox";
import TwoColumnBox from "../ui/TwoColumnBox";

const CvForm = () => {
  return (
    <div className="form-container">
      <TwoColumnBox title="Personal Details" />
      <OneColumnBox
        title="Personal Profile"
        label="Short paragraph at the top of your CV, in which you summarize your relevant experience and skills in 4 to 6 lines."
      />
      <ThreeInputBox
        title="Work Experience"
        label="Write down what you did and achieved in your daily tasks in 4 to 6 lines, followed by 2 or more key achievements where possible."
        type="date"
      />
      <ThreeInputBox
        title="Education"
        label="Studies and certifications"
        type="date"
      />
    </div>
  );
};

export default CvForm;
