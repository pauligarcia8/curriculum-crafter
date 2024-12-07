import { useContext } from "react";
import { FormContext } from "../store/user-form-context";
import classes from "./CvPreview.module.css";
import IconDetail from "../ui/IconDetail";
import CategoryBlock from "../ui/CategoryBlock";
import { getDetailsData } from "../utils/personalDetails";
import { concatenateCategoryData, concatenateDuration, hasValidData } from "../utils/dataUtils";

const CvPreview = () => {
  const { cvFormData } = useContext(FormContext);
  const { fullname, lastname, profile, charge } = cvFormData.personalInfo;
  const { skills } = cvFormData;

  const details = getDetailsData(cvFormData.personalInfo);
  const name = fullname + " " + lastname;
  const concatenateSkills = skills.join(", ");

  const hasExperience = hasValidData(cvFormData.workExperience);
  const hasEducation = hasValidData(cvFormData.education);

  return (
    <div className={classes.previewContainer}>
      <div className={classes.personalInfo}>
        <div className={classes.profile}>
          <h3>{charge}</h3>
          <p>{profile}</p>
        </div>
        {skills.length > 0 && (
          <div>
            <h3>Skills:</h3>
            <p>{concatenateSkills}</p>
          </div>
        )}
        <div className={classes.details}>
          {details.map(({ icon, altText, detail }, index) => (
            <IconDetail
              key={index}
              icon={icon}
              altText={altText}
              detail={detail}
            />
          ))}
        </div>
      </div>
      <div className={classes.categories}>
        <h1>{name}</h1>
        {hasExperience && cvFormData.workExperience.map((experience, i) => (
          <CategoryBlock
          key={`${experience.company}-${i}`}
          title="Work Experience"
          category={concatenateCategoryData(experience.company, experience.position)}
          duration={concatenateDuration(experience.startDate, experience.endDate)}
          description={experience.description}
        />
        ))}
        {hasEducation && cvFormData.education.map((education, i) => (
          <CategoryBlock
          key={`${education.institution}-${i}`}
          title="Education"
          category={concatenateCategoryData(education.institution, education.degree)}
          duration={concatenateDuration(education.startDate, education.endDate)}
          description={education.description}
        />
        ))}
      </div>
    </div>
  );
};

export default CvPreview;
