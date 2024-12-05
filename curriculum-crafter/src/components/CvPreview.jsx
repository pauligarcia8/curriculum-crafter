import { useContext } from "react";
import { FormContext } from "../store/user-form-context";
import classes from "./CvPreview.module.css";
import IconDetail from "../ui/IconDetail";
import CategoryBlock from "../ui/CategoryBlock";
import { getDetailsData } from "../utils/personalDetails";
import { formatDate } from "../utils/date";

const CvPreview = () => {
  const { cvFormData } = useContext(FormContext);
  const { fullname, lastname, profile, charge } = cvFormData.personalInfo;
  const details = getDetailsData(cvFormData.personalInfo);
  const {
    company,
    position,
    startDate: workStartDate,
    endDate: workEndDate,
    description: workDescription,
  } = cvFormData.workExperience[0];

  const {
    institution,
    degree,
    startDate: educationStartDate,
    endDate: educationEndDate,
    description: educationDescription,
  } = cvFormData.education[0];
  const { skills } = cvFormData;

  const name = fullname + " " + lastname;
  const concateSkills = skills.join(", ");
  const work = [company, position].filter(Boolean).join(", ");
  const workDuration = [formatDate(workStartDate), formatDate(workEndDate)]
    .filter(Boolean)
    .join(" / ");
  const education = [institution, degree].filter(Boolean).join(", ");
  const educationDuration = [
    formatDate(educationStartDate),
    formatDate(educationEndDate),
  ]
    .filter(Boolean)
    .join(" / ");

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
            <p>{concateSkills}</p>
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
        {work && (
          <CategoryBlock
            title="Work Experience"
            category={work}
            duration={workDuration}
            description={workDescription}
          />
        )}
        {education && (
          <CategoryBlock
            title="Education"
            category={education}
            duration={educationDuration}
            description={educationDescription}
          />
        )}
      </div>
    </div>
  );
};

export default CvPreview;
